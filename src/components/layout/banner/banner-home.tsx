"use client";
import { MeteorsBackground } from "@/components/layout/banner/banner-grid";
import AnimationContainer from "@/components/ui/animation-container";
import { Button } from "@/components/ui/button";
import ButtonCustom from "@/components/ui/button-custom";

import { ArrowRightIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

interface IBannerLynxProps {
	// Props go here
}

const BannerHome = (_props: IBannerLynxProps) => {
	const handleScroll = () => {
		const target = document.getElementById("pricing");
		target?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="relative h-[30rem] md:h-[40rem] text_custom_selection">
			{/* <MeteorsBackground gridSize={120} meteorCount={3} /> */}
			<div className="mx-auto w-full max-w-5xl px-6 h-full py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 ">
				<AnimationContainer className="flex items-center justify-center flex-col lg:gap-8 gap-4">
					<button
						type="button"
						onClick={handleScroll}
						className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 cursor-pointer"
					>
						<span>
							<span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
						</span>
						<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
						<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-red-600/20"></span>
						<span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
							Introducing Waterbus
							<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</span>
					</button>
					<h1 className=" relative mx-0  pt-5 md:mx-auto md:px-0 px-4 md:py-2 text-balance text-center text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
						<p className="text-center">Go live instantly</p>
						<p className="text-primary text-center">Scale without limits</p>
					</h1>
					<p className=" text-white  text-center text-sm  lg:mb-0 sm:text-base lg:text-lg">
						Waterbus is an open source WebRTC infrastructure for real-time
						video, audio, and data. Start your project with a distributed SFU,
						ultra-low latency streaming (LL-HLS), scalable signaling, cloud
						egress, QUIC transport, and SVC/Simulcast support — all written in
						Rust.
					</p>
					<div className="flex items-center gap-2 z-10">
						<ButtonCustom className="h-[38px] text-sm px-4 py-2" />
						<Link
							href="/docs"
							className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-neutral-600 focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-sm px-4 py-2 h-[38px]"
						>
							Try a demo
						</Link>
					</div>
				</AnimationContainer>
			</div>
			<div
				style={{
					filter: "blur(80px)",
					opacity: 0.05,
					zIndex: 0,
					borderRadius: "100%",
					width: "100%",
					maxWidth: "500px",
					height: "500px",
					marginTop: "thấy 250px",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundImage:
						"conic-gradient(from 180deg at 50% 50%,#ff624d 0deg,180deg,#00ebeb 0deg)",
					backgroundSize: "200% 200%",
					backgroundPosition: "center",
					animation: "spin 10s linear infinite",
				}}
			></div>
		</div>
	);
};
export default BannerHome;
