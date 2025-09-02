"use client";

import { Iphone15Pro } from "@/components/bento/card-virtual-background/devide-mobile";
import { User } from "lucide-react";
import Image from "next/image";

export default function VirtualBackgroundSliderPlain() {
	return (
		<div className="group relative w-full h-[220px] overflow-hidden rounded-2xl   px-4">
			{/* glow nhẹ để tạo chiều sâu */}
			{/* <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(180px_120px_at_80%_20%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(180px_140px_at_20%_85%,rgba(34,211,238,0.18),transparent_65%)]" /> */}

			{/* Nền cũ (mờ/dotted) */}
			{/* <div
				className="absolute h-[150px] w-[250px] top-[58px] -translate-x-1/2 left-1/2 rounded-xl border border-white/15
        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_1.2px)]
        [background-size:8px_8px]
        transition-opacity duration-300 group-hover:opacity-40"
			/> */}

			{/* <div
				className="absolute top-[58px] right-[-240px] h-[150px] w-[250px] rotate-6 rounded-2xl
        bg-gradient-to-b from-cyan-400/10 to-violet-400/10 ring-1 ring-white/20
        shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
        opacity-0 transition-all duration-500 ease-out delay-100
        group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:rotate-0 group-hover:opacity-100"
			>
				<div className="absolute inset-0 rounded-2xl p-3 opacity-50">
					<div className="h-[48%] w-[32%] rounded bg-white/10" />
					<div className="absolute bottom-3 right-3 h-12 w-24 rounded bg-white/10" />
				</div>
			</div> */}

			<div
				className="absolute  left-[-260px] h-[220px] -bg-conic-150 -rotate-6
         transition-all duration-500 ease-out delay-200
        group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:rotate-0 group-hover:opacity-100 z-0 overflow-hidden rounded-sm"
			>
				<Image
					src="/images/bg-1.png"
					alt="virtual-background"
					width={220}
					height={220}
					className="h-[220px]  object-cover"
				/>
			</div>
			<div className="absolute h-[220px] translate-x-1/2 p-2 right-1/2 border-4 border-neutral-300 rounded-sm overflow-hidden z-20 bg-neutral-400/20">
				<Image
					src="/images/slide-2.png"
					alt="virtual-background"
					width={220}
					height={220}
					className="h-[220px] object-cover "
				/>
			</div>
		</div>
	);
}
