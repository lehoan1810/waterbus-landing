"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface DatabaseWithRestApiProps {
	className?: string;
	lightColor?: string; // màu ánh sáng xanh
}

const DatabaseWithRestApi = ({
	className,
	lightColor,
}: DatabaseWithRestApiProps) => {
	const glowColor = lightColor || "#00A6F5";

	const lines = [
		"M 100 60 v 10 q 0 5 -5 5 H 40 q -5 0 -5 5 v 10", // GET
		"M 100 60 v 10 q 0 5 -5 5 H 80 q -5 0 -5 5 v 10", // POST
		"M 100 60 v 10 q 0 5  5 5 H 120 q 5 0 5 5 v 10", // PUT
		"M 100 60 v 10 q 0 5  5 5 H 160 q 5 0 5 5 v 10", // DELETE
	];

	return (
		<div
			className={cn(
				"relative flex w-full h-[200px] flex-col items-center ",
				className
			)}
		>
			<svg className=" sm:w-full text-muted" viewBox="0 0 200 120">
				{/* ===== BASE LINES (xám) từ box -> 4 buttons ===== */}
				<g
					stroke="currentColor"
					fill="none"
					strokeWidth="0.4"
					strokeLinecap="round"
					vectorEffect="non-scaling-stroke"
				>
					{lines.map((d, i) => (
						<path key={i} d={d} />
					))}
				</g>

				{/* ===== HIGHLIGHT XANH CHẠY DỌC LINE (solid + glow) ===== */}
				<g fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke">
					{lines.map((d, i) => (
						<g key={`hi-${i}`}>
							{/* glow rộng, mờ */}
							<path
								d={d}
								pathLength={100}
								stroke={glowColor}
								opacity={0.35}
								strokeWidth={2}
								filter="url(#blue-glow)"
								strokeDasharray="16 84"
								strokeDashoffset="100"
							>
								<animate
									attributeName="stroke-dashoffset"
									values="100;0"
									dur="2s"
									begin={`${0.15 * i}s`}
									repeatCount="indefinite"
								/>
							</path>

							{/* lõi sáng mảnh */}
							<path
								d={d}
								pathLength={100}
								stroke={glowColor}
								strokeWidth={0.9}
								strokeDasharray="16 84"
								strokeDashoffset="100"
							>
								<animate
									attributeName="stroke-dashoffset"
									values="100;0"
									dur="2s"
									begin={`${0.15 * i}s`}
									repeatCount="indefinite"
								/>
							</path>
						</g>
					))}
				</g>

				{/* ===== BOTTOM BUTTONS ===== */}
				<g stroke="currentColor" fill="none" strokeWidth="0.4">
					{/* GET */}
					<g>
						<rect fill="#18181B" x="22" y="95" width="34" height="30" rx="5" />
						<UserIcon x="29" y="97.5" />
					</g>
					{/* POST */}
					<g>
						<rect fill="#18181B" x="62" y="95" width="34" height="30" rx="5" />
						<UserIcon x="69" y="97.5" />
					</g>
					{/* PUT */}
					<g>
						<rect fill="#18181B" x="104" y="95" width="34" height="30" rx="5" />
						<UserIcon x="111" y="97.5" />
					</g>
					{/* DELETE / FOURTH */}
					<g>
						<rect fill="#18181B" x="146" y="95" width="40" height="30" rx="5" />

						<UserIcon x="156" y="97.5" />
					</g>
				</g>

				{/* ===== DEFS ===== */}
				<defs>
					{/* blur glow cho highlight */}
					<filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="2" />
					</filter>
				</defs>
			</svg>

			{/* ===== BOX Ở TRÊN ===== */}
			<div className="absolute  z-30 flex items-center justify-center px-20  border-amber-500  rounded-full  font-semibold text-xs top-10">
				<Image
					src="/svg/cloudflare.svg"
					alt="cloudflare"
					width={80}
					height={80}
					className="size-[80px] object-contain"
				/>
			</div>
		</div>
	);
};

export default DatabaseWithRestApi;

const UserIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => (
	<svg
		x={x}
		y={y}
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="#F4811F"
		strokeWidth="1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	</svg>
);
