import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "error";

export const metadata: Metadata = {
	title: "Blog",
};

export default async function BlogIndexPage() {
	const posts = await getAllPosts();

	if (!posts.length) {
		return (
			<div className="mx-auto max-w-3xl px-4 py-10">Chưa có bài viết.</div>
		);
	}

	return (
		<div className="mx-auto max-w-5xl px-4 py-10">
			<div className="divide-y divide-neutral-800/80">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="flex items-start gap-6 py-8 group"
					>
						<div className="flex-1 min-w-0">
							<h2 className="inline-block text-balance text-[1.75rem] leading-8 font-light text-white/95 transition-colors hover:text-white ">
								{post?.title}
							</h2>
							{post?.summary ? (
								<p className="mt-3 line-clamp-3 text-pretty text-[15px] leading-6 text-zinc-400">
									{post.summary}
								</p>
							) : null}
							<div className="mt-4 flex  items-start gap-3 text-sm text-neutral-400">
								{post.authorAvatar ? (
									<span className="inline-flex items-center justify-center w-7 h-7 rounded-full overflow-hidden bg-neutral-800">
										<Image
											src={post.authorAvatar}
											alt={post.authorName || "Author"}
											width={28}
											height={28}
											className="object-cover"
										/>
									</span>
								) : null}
								<div className="flex flex-col gap-1">
									{post.authorName ? (
										<span className="text-neutral-300 text-sm leading-4">
											{post.authorName}
										</span>
									) : null}
									<div className="text-neutral-400 text-[13px] ">
										<span>{new Date(post.date).toLocaleDateString()}</span>
										{typeof post.readingMinutes === "number" ? (
											<span> • {post.readingMinutes} min read</span>
										) : null}
										{post.tags?.length ? (
											<span> • {post.tags.join(", ")}</span>
										) : null}
									</div>
								</div>
							</div>
						</div>
						{post.cover ? (
							<div className="relative hidden sm:block w-[180px] h-[120px] shrink-0 rounded-lg overflow-hidden border border-neutral-800/60">
								<Image
									src={post.cover}
									alt={post.title}
									fill
									className="object-cover"
									quality={100}
								/>
							</div>
						) : null}
					</Link>
				))}
			</div>
		</div>
	);
}
