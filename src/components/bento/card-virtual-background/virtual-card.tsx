"use client";

import { User } from "lucide-react";

export default function VirtualBackgroundSliderPlain() {
	return (
		<div className="group relative w-full h-full  rounded-2xl   p-4">
			{/* glow nhẹ để tạo chiều sâu */}
			<div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(180px_120px_at_80%_20%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(180px_140px_at_20%_85%,rgba(34,211,238,0.18),transparent_65%)]" />

			{/* Nền cũ (mờ/dotted) */}
			<div
				className="absolute h-[150px] w-[250px] top-[58px] -translate-x-1/2 left-1/2 rounded-xl border border-white/15
        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_1.2px)]
        [background-size:8px_8px]
        transition-opacity duration-300 group-hover:opacity-40"
			/>

			{/* ===== FRAMES SLIDER: trượt vào giữa ===== */}
			{/* Frame 1: từ trái */}
			{/* <div
				className="absolute top-[72px] left-[-220px] h-[100px] w-[150px] -rotate-6 rounded-xl
        border border-white/25 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_1.2px)] [background-size:8px_8px]
        shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
        opacity-0 transition-all duration-500 ease-out
        group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:rotate-0 group-hover:opacity-100"
			>
				<div className="absolute inset-0 rounded-xl p-3 opacity-40">
					<div className="h-[52%] w-[28%] rounded bg-white/10" />
					<div className="absolute bottom-3 right-3 h-12 w-20 rounded bg-white/10" />
				</div>
			</div> */}

			{/* Frame 2: từ phải (gradient nhẹ, delay) */}
			<div
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
			</div>

			{/* Frame 3: từ trái (đậm nhất, delay lớn hơn) */}
			<div
				className="absolute top-[58px] left-[-260px] h-[150px] w-[250px] -rotate-6 rounded-2xl
        bg-gradient-to-b from-cyan-400/12 to-violet-400/12 ring-1 ring-white/25
        shadow-[0_0_0_1px_rgba(255,255,255,0.08)]
        opacity-0 transition-all duration-500 ease-out delay-200
        group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:rotate-0 group-hover:opacity-100"
			>
				<div className="absolute inset-0 rounded-2xl p-3 opacity-60">
					<div className="h-[50%] w-[34%] rounded bg-white/10" />
					<div className="absolute bottom-3 right-3 h-12 w-24 rounded bg-white/10" />
				</div>
			</div>

			{/* ===== Icon người ở giữa (không dùng SVG) ===== */}
			<div className="pointer-events-none absolute  inset-0 flex items-center justify-center">
				<User className="size-14" strokeWidth={1.5} />
			</div>
		</div>
	);
}
