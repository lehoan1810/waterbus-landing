// app/blog/[slug]/page.tsx
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "error"; // đảm bảo SSG
export const dynamicParams = false;

export async function generateStaticParams() {
	const slugs = await getAllSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await getPostBySlug(params.slug);
	if (!post) return { title: "Not found" };
	return {
		title: post.title,
		description: post.summary || undefined,
		openGraph: {
			title: post.title,
			description: post.summary || undefined,
			images: post.cover ? [{ url: post.cover }] : undefined,
			type: "article",
		},
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: { slug: string };
}) {
	const post = await getPostBySlug(params.slug);
	if (!post) {
		return (
			<div className="mx-auto max-w-3xl px-4 py-10">
				Không tìm thấy bài viết.
			</div>
		);
	}
	return (
		<article className={`mx-auto max-w-3xl px-4 py-10 font-sans`}>
			<h1 className="text-3xl font-bold mb-3 ">{post.title}</h1>
			<div className="text-sm text-gray-500 mb-6">
				{new Date(post.date).toLocaleDateString()}
				{post.tags?.length ? <> • {post.tags.join(", ")}</> : null}
			</div>

			{post.cover ? (
				<div className="relative aspect-[16/9] w-full mb-6">
					<Image
						src={post.cover}
						alt={post.title}
						fill
						quality={100}
						className="object-cover rounded-xl"
					/>
				</div>
			) : null}

			<div
				className={` max-w-none prose prose-invert prose-img:rounded-xl prose-headings:no-underline font-sans  prose-code:font-mono `}
				dangerouslySetInnerHTML={{ __html: post?.html || "" }}
			/>
		</article>
	);
}
