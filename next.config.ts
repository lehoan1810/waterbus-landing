import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ["lucide-react", "framer-motion"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
		formats: ["image/webp"],
	},
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|woff2|woff)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default nextConfig;
