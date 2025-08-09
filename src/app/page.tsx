"use client";
import BentoGrid from "@/components/bento/bento-grid";
import ButtonCustomV2 from "@/components/button/button-custom";
import BannerHome from "@/components/layout/banner/banner-home";
import VideoHome from "@/components/layout/banner/video-home";
import SectionMain from "@/components/layout/main/section-main";
import SectionPricing from "@/components/layout/main/section-pricing";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [videoUrl, setVideoUrl] = useState<{
		active: number;
		url: string;
	}>({
		active: 1,
		url: "https://media.waterbus.tech/waterbus-demo.mp4",
	});
	const listVideo = [
		{
			id: 1,
			name: "Video Conferencing",
			url: "https://media.waterbus.tech/waterbus-demo.mp4",
		},
		{
			id: 2,
			name: "Live Streaming",
			url: "https://media.waterbus.tech/waterbus-demo.mp4",
		},
		{
			id: 3,
			name: "Virtual Background",
			url: "https://media.waterbus.tech/waterbus-demo.mp4",
		},
		{
			id: 4,
			name: "Beauty Filters",
			url: "https://media.waterbus.tech/waterbus-demo.mp4",
		},
	];
	return (
		<main className="space-y-10 sm:space-y-20">
			<BannerHome />
			<BentoGrid />
			<div className=" flex flex-col gap-y-16 md:gap-y-24 items-center justify-center relative">
				<SectionMain />
			</div>
			<div className="container mx-auto px-6  lg:px-16 xl:px-28 overflow-hidden z-[99999]">
				<div className="flex items-center flex-wrap gap-5 md:gap-8 justify-center pt-5 pb-8 md:py-11  w-full max-w-6xl bg-transparent mx-auto ">
					{listVideo.map((item, index) => (
						<p
							key={index}
							onClick={() => setVideoUrl({ active: item.id, url: item.url })}
							className={`text-xs md:text-sm px-5 py-1 md:px-8 md:py-2 border-2 rounded-full cursor-pointer text-neutral-500 hover:text-white bg-neutral-900 font-medium duration-200 hover:border-white/50 ${
								videoUrl.active === item.id ? "text-white border-white/50" : ""
							}`}
						>
							{item.name}
						</p>
					))}
				</div>
				<VideoHome videoUrl={videoUrl.url} />
			</div>
			<div
				id="pricing"
				className="max-w-3xl  pb-12 mx-auto space-y-6  px-4  md:px-6"
			>
				<p className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent ">
					Fully open source, built for developers
				</p>
				<p className="text-center mx-auto	max-w-[500px] md:max-w-none text-sm sm:text-base lg:text-lg">
					Sponsor the project to support infrastructure costs and continued
					development.
				</p>
				<SectionPricing />
			</div>
			<div className="relative overflow-x-clip  md:py-20">
				<Image
					width={700}
					height={700}
					src="https://livewire.laravel.com/img/blur.svg"
					alt="Waterbus Demo"
					className="animate_pulse_slow absolute w-[700px] h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
				/>
				<div className=" grid grid-cols-12 items-center gap-4 border-t py-20 text-center px-16 border-none">
					<p className="col-span-12 text-4xl font-medium">
						<span className="text-neutral-500">Build in a weekend, </span>
						<span>scale to millions</span>
					</p>
					<div className="flex items-center justify-center gap-2 col-span-12 mt-4">
						{/* <ButtonCustom className="h-[38px] text-sm px-4 py-2" />
						<Link
							href="/docs"
							className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-neutral-600 focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-sm px-4 py-2 h-[38px]"
						>
							Try a demo
						</Link> */}
						<ButtonCustomV2
							variant="primary"
							size="md"
							label="START BUILDING"
							icon="github"
							className="disabled:opacity-40 w-fit disabled:cursor-default"
						/>
						<ButtonCustomV2
							variant="link"
							size="md"
							label="TRY DEMO"
							icon="github"
							className="disabled:opacity-40 w-fit disabled:cursor-default"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
