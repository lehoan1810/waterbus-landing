"use client";

import { cn } from "@/lib/utils";

interface P2PTopologyProps {
	className?: string;
	lightColor?: string; // màu hiệu ứng chạy
	userColor?: string; // màu icon user
}

const P2PTopology = ({
	className,
	lightColor,
	userColor = "#3B82F6",
}: P2PTopologyProps) => {
	const glowColor = lightColor || "#00A6F5";

	const vb = { w: 200, h: 50 };
	const midY = vb.h / 2;

	// Card user & vị trí
	const USER_W = 34;
	const USER_H = 30;
	const left = { x: 40, y: midY };
	const right = { x: vb.w - 40, y: midY };

	// Mép trong của 2 card
	const start = { x: left.x + USER_W / 2, y: left.y };
	const end = { x: right.x - USER_W / 2, y: right.y };

	// ===== 2 ĐƯỜNG THẲNG SONG SONG =====
	const GAP = 18; // khoảng cách giữa 2 line
	const yTop = midY - GAP / 2; // line trên
	const yBottom = midY + GAP / 2; // line dưới

	const topLine = `M ${start.x} ${yTop} H ${end.x}`;
	const bottomLine = `M ${start.x} ${yBottom} H ${end.x}`;

	const lines: Array<{ d: string; dir: "ltr" | "rtl" }> = [
		{ d: topLine, dir: "ltr" }, // trên: trái → phải
		{ d: bottomLine, dir: "rtl" }, // dưới: phải → trái
	];

	return (
		<div
			className={cn(
				"relative flex w-full flex-col items-center justify-center",
				className
			)}
		>
			<p className="text-sm font-medium text-neutral-100">P2P</p>
			<svg className="sm:w-full text-muted" viewBox={`0 0 ${vb.w} ${vb.h}`}>
				{/* Base lines (xám) */}

				<g
					stroke="currentColor"
					fill="none"
					strokeWidth="0.45"
					strokeLinecap="round"
					vectorEffect="non-scaling-stroke"
				>
					{lines.map(({ d }, i) => (
						<path key={i} d={d} />
					))}
				</g>
				{/* Highlights: trên LTR, dưới RTL */}
				<g fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke">
					{lines.map(({ d, dir }, i) => {
						const startOffset = dir === "ltr" ? 100 : 0;
						const values = dir === "ltr" ? "100;0" : "0;100";
						return (
							<g key={`hi-${i}`}>
								<path
									d={d}
									pathLength={100}
									stroke={glowColor}
									opacity={0.35}
									strokeWidth={2}
									filter="url(#blue-glow)"
									strokeDasharray="18 82"
									strokeDashoffset={startOffset}
								>
									<animate
										attributeName="stroke-dashoffset"
										values={values}
										dur="2.0s"
										begin={`${0.12 * i}s`}
										repeatCount="indefinite"
									/>
								</path>
								<path
									d={d}
									pathLength={100}
									stroke={glowColor}
									strokeWidth={1}
									strokeDasharray="18 82"
									strokeDashoffset={startOffset}
								>
									<animate
										attributeName="stroke-dashoffset"
										values={values}
										dur="2.0s"
										begin={`${0.12 * i}s`}
										repeatCount="indefinite"
									/>
								</path>
							</g>
						);
					})}
				</g>
				{/* Hai user hai bên (giữ nguyên) */}
				<g stroke="currentColor" fill="none" strokeWidth="0.4">
					{/* Left */}
					<g>
						<rect
							fill="#18181B"
							x={left.x - USER_W / 2}
							y={left.y - USER_H / 2}
							width={USER_W}
							height={USER_H}
							rx="6"
						/>
						<UserIcon
							x={(left.x - USER_W / 2 + 7).toString()}
							y={(left.y - USER_H / 2 + 5).toString()}
							strokeColor={userColor}
						/>
					</g>
					{/* Right */}
					<g>
						<rect
							fill="#18181B"
							x={right.x - USER_W / 2}
							y={right.y - USER_H / 2}
							width={USER_W}
							height={USER_H}
							rx="6"
						/>
						<UserIcon
							x={(right.x - USER_W / 2 + 7).toString()}
							y={(right.y - USER_H / 2 + 5).toString()}
							strokeColor={userColor}
						/>
					</g>
				</g>
				<defs>
					<filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="2" />
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default P2PTopology;

const UserIcon = ({
	x = "0",
	y = "0",
	strokeColor = "#F4811F",
}: {
	x: string;
	y: string;
	strokeColor?: string;
}) => (
	<svg
		x={x}
		y={y}
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke={strokeColor}
		strokeWidth="1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	</svg>
);
