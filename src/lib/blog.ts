import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { cache } from "react";

// const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type PostMeta = {
	slug: string; // = tên file
	title: string;
	date: string; // ISO
	tags?: string[];
	summary?: string;
	cover?: string;
	published?: boolean;
	authorName?: string;
	authorAvatar?: string;
	readingMinutes?: number;
};

export type Post = PostMeta & {
	html: string; // nội dung đã render HTML
};

async function listMarkdownFiles() {
	const files = await fs.readdir(BLOG_DIR);
	return files.filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

export const getAllPosts = cache(async (): Promise<PostMeta[]> => {
	const files = await listMarkdownFiles();

	const posts: PostMeta[] = [];
	for (const filename of files) {
		const full = path.join(BLOG_DIR, filename);
		const raw = await fs.readFile(full, "utf8");
		const { data, content } = matter(raw);

		const slug = filename.replace(/\.(md|mdx)$/i, "");
		const words = content
			.replace(/<[^>]*>/g, " ")
			.replace(/[`*_>#-]/g, " ")
			.split(/\s+/)
			.filter(Boolean).length;
		const readingMinutes = Math.max(1, Math.round(words / 200));

		const meta: PostMeta = {
			slug,
			title: data.title ?? slug,
			date: data.date ?? new Date().toISOString(),
			tags: data.tags ?? [],
			summary: data.summary ?? "",
			cover: data.cover ?? undefined,
			published: data.published !== false, // mặc định true
			authorName:
				data.author?.name ??
				data.author ??
				(Array.isArray(data.authors) ? data.authors.join(", ") : undefined),
			authorAvatar:
				data.author?.avatar ?? data.avatar ?? data.authorAvatar ?? undefined,
			readingMinutes,
		};
		posts.push(meta);
	}

	// sort mới → cũ
	posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
	// chỉ lấy published
	return posts.filter((p) => p.published);
});

export const getPostBySlug = cache(
	async (slug: string): Promise<Post | null> => {
		const filePathMd = path.join(BLOG_DIR, `${slug}.md`);
		const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`);

		let filePath = filePathMd;
		try {
			await fs.access(filePathMd);
		} catch {
			try {
				await fs.access(filePathMdx);
				filePath = filePathMdx;
			} catch {
				return null;
			}
		}

		const raw = await fs.readFile(filePath, "utf8");
		const { data, content } = matter(raw);

		const html = String(
			await unified()
				.use(remarkParse)
				.use(remarkGfm)
				.use(remarkRehype, { allowDangerousHtml: true })
				.use(rehypeSlug)
				.use(rehypeAutolinkHeadings, { behavior: "wrap" })
				.use(rehypeHighlight)
				.use(rehypeStringify, { allowDangerousHtml: true })
				.process(content)
		);

		const meta: Post = {
			slug,
			title: data.title ?? slug,
			date: data.date ?? new Date().toISOString(),
			tags: data.tags ?? [],
			summary: data.summary ?? "",
			cover: data.cover ?? undefined,
			published: data.published !== false,
			html,
		};

		if (!meta.published) return null;
		return meta;
	}
);

export const getAllSlugs = cache(async () => {
	const metas = await getAllPosts();
	return metas.map((m) => m.slug);
});
