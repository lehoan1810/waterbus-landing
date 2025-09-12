import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import localFont from "next/font/local";

const customFont = localFont({
	src: [
		{
			path: "../../public/fonts/circular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/circular-medium.woff",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/circular-bold.woff",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	preload: true,
});

const GeistMono = Geist_Mono({
	subsets: ["latin"],
	preload: true,
	display: "swap",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Waterbus | The Open Source WebRTC SFU.",
	description:
		"Open source video conferencing app built on latest WebRTC SDK Android/iOS/MacOS/Web",
	openGraph: {
		title: "Waterbus | The Open Source WebRTC SFU.",
		description:
			"Open source video conferencing app built on latest WebRTC SDK Android/iOS/MacOS/Web",
		images: ["https://media.waterbus.tech/waterbus-logo.svg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	robots: {
		index: true,
		follow: true,
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		userScalable: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning className="dark" lang="en">
			<body
				className={`${customFont.className} ${GeistMono.variable} antialiased font-sans`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
