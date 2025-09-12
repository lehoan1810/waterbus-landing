// app/sitemap.ts
import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
	const posts = await getAllPosts();
	const base = "https://waterbus.tech/";
	return [
		{ url: `${base}/`, lastModified: new Date() },
		{ url: `${base}/blog`, lastModified: new Date() },
		...posts.map((p) => ({
			url: `${base}/blog/${p.slug}`,
			lastModified: p.date,
		})),
	];
}
