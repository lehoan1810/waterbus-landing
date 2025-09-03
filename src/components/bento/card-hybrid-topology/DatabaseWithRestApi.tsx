"use client";

import { cn } from "@/lib/utils";

interface SfuTopologyProps {
	className?: string;
	lightColor?: string;
	centerLabel?: string; // "SFU"
}

const DatabaseWithRestApi = ({
	className,
	lightColor,
	centerLabel = "SFU",
}: SfuTopologyProps) => {
	const glowColor = lightColor || "#F4811F";

	// Khung vẽ & box SFU
	const vb = { w: 260, h: 140 };
	const center = { x: vb.w / 2, y: vb.h / 2 };
	const sfu = { w: 44, h: 22, r: 6 };

	// Mép trái/phải của SFU
	const startL = { x: center.x - sfu.w / 2, y: center.y };
	const startR = { x: center.x + sfu.w / 2, y: center.y };

	// Độ dài đoạn thẳng sát SFU (hai bên bằng nhau)
	const STUB = 28; // tăng/giảm để đoạn thẳng dài/ngắn hơn
	const BUS_X_LEFT = startL.x - STUB;
	const BUS_X_RIGHT = startR.x + STUB;

	// 3 node trái + 3 node phải (tọa độ tâm)
	const leftNodes = [
		{ x: 35, y: 28 },
		{ x: 35, y: 64 },
		{ x: 35, y: 100 },
	];
	const rightNodes = [
		{ x: vb.w - 35, y: 28 },
		{ x: vb.w - 35, y: 64 },
		{ x: vb.w - 35, y: 100 },
	];

	// H-V-H: từ mép SFU -> H tới bus -> V xuống y của node -> H sang node
	const makeSquarePath = (
		from: { x: number; y: number },
		busX: number,
		to: { x: number; y: number }
	) => `M ${from.x} ${from.y} H ${busX} V ${to.y} H ${to.x}`;

	const paths = [
		...leftNodes.map((n) => makeSquarePath(startL, BUS_X_LEFT, n)),
		...rightNodes.map((n) => makeSquarePath(startR, BUS_X_RIGHT, n)),
	];

	// Card user
	const USER_W = 34;
	const USER_H = 30;

	return (
		<div
			className={cn(
				"relative flex w-full h-[180px] items-center justify-center",
				className
			)}
		>
			<svg className="sm:w-full text-muted" viewBox={`0 0 ${vb.w} ${vb.h}`}>
				{/* ===== Base lines (xám) — góc vuông, đầu phẳng ===== */}
				<g
					stroke="currentColor"
					fill="none"
					strokeWidth="0.4"
					strokeLinecap="butt"
					strokeLinejoin="miter"
					vectorEffect="non-scaling-stroke"
				>
					{paths.map((d, i) => (
						<path key={i} d={d} />
					))}
				</g>

				{/* ===== Highlight xanh chạy dọc line ===== */}
				<g
					fill="none"
					strokeLinecap="butt"
					strokeLinejoin="miter"
					vectorEffect="non-scaling-stroke"
				>
					{paths.map((d, i) => (
						<g key={`hi-${i}`}>
							{/* glow rộng */}
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
									begin={`${0.12 * i}s`}
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
									begin={`${0.12 * i}s`}
									repeatCount="indefinite"
								/>
							</path>
						</g>
					))}
				</g>

				{/* ===== Box trung tâm: SFU ===== */}
				<g>
					<rect
						x={center.x - sfu.w / 2}
						y={center.y - sfu.h / 2}
						width={sfu.w}
						height={sfu.h}
						rx={sfu.r}
						fill="#18181B"
						stroke="currentColor"
						strokeWidth="0.6"
					/>
					<text
						x={center.x}
						y={center.y + 4}
						textAnchor="middle"
						fontSize="10"
						fontWeight="600"
						fill="#E5E7EB"
					>
						{centerLabel}
					</text>
				</g>

				{/* ===== User nodes ===== */}
				<g stroke="currentColor" fill="none" strokeWidth="0.4">
					{[...leftNodes, ...rightNodes].map((n, i) => (
						<g key={`node-${i}`}>
							<rect
								fill="#18181B"
								x={n.x - USER_W / 2}
								y={n.y - USER_H / 2}
								width={USER_W}
								height={USER_H}
								rx="5"
							/>
							<UserIcon
								x={(n.x - USER_W / 2 + 7).toString()}
								y={(n.y - USER_H / 2 + 5).toString()}
							/>
						</g>
					))}
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
