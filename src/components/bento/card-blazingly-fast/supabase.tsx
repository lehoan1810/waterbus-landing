"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	hasGlow?: boolean;
}

const IMAGE_SRC = "/images/animations_2.svg"; // nền hiển thị (giữ nguyên visual gốc)
const VIEWBOX = [0, 0, 398, 398] as const;

// ==== SHAPES lấy từ SVG bạn gửi (đã bỏ fill/stroke để dùng group-level) ====
const SHAPES = `
<path d="M207 144c1-1 2 0 2 1l-8 44 1 1h31v1l-42 62h-2l8-49-1-1-30-1-1-1 42-57Zm3-12h-1a8 8 0 0 0-5 3l-1 1-46 61c-2 3-3 6-1 9s4 5 7 5h23l1 1-7 44 1 5 4 4 3 1c3 0 5-2 7-4l46-67c2-3 3-6 1-9s-4-4-7-4h-23l-1-2 7-37v-3c0-2 0-4-2-5-2-2-3-3-6-3Z"/>
`;

// === cấu hình hiệu ứng spotlight (nhỏ gọn) ===
const STROKE_WIDTH = 1; // độ dày line
const SPOT_RADIUS = 200; // bán kính spotlight (nhỏ)
const MID_OFFSET = 0.35; // fade rìa (0.25..0.75, càng lớn càng mềm)

const DatabaseVisual: React.FC<Props> = ({ className, hasGlow = true }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const [pos, setPos] = useState({ x: 0, y: 0 });

	// Map pixel -> viewBox để spotlight bám đúng khi SVG bị scale
	const handlePointerMove = useCallback(
		(e: React.PointerEvent) => {
			if (!hasGlow || !svgRef.current) return;
			const rect = svgRef.current.getBoundingClientRect();
			const [vx, vy, vw, vh] = VIEWBOX;
			const x = (e.clientX - rect.left) * (vw / rect.width) + vx;
			const y = (e.clientY - rect.top) * (vh / rect.height) + vy;
			setPos({ x, y });
		},
		[hasGlow]
	);

	const gradientTransform = `translate(${pos.x} ${pos.y}) rotate(45) scale(${SPOT_RADIUS} ${SPOT_RADIUS})`;

	return (
		<figure
			className={cn("absolute inset-0 z-0", className)}
			role="img"
			aria-label="Database visual with pink spotlight"
		>
			<span
				className="absolute group w-full md:w-auto h-full md:aspect-square flex items-end md:items-center justify-center md:justify-end right-0 left-0 md:left-auto xl:-right-12 2xl:right-0 top-12 md:top-0 md:bottom-0 my-auto"
				onPointerMove={handlePointerMove}
			>
				{/* NỀN: hiện đúng visual gốc (fill xám + stroke xám) */}
				<Image
					src={IMAGE_SRC}
					alt="visual"
					fill
					priority
					quality={100}
					sizes="100%"
					draggable={false}
					className="hidden dark:block absolute antialiased inset-0 object-contain object-center z-0 w-full h-full md:w-auto transition-opacity group-hover:opacity-80"
				/>
				<Image
					src="/images/animations_3.svg"
					alt="visual"
					fill
					priority
					quality={100}
					sizes="100%"
					draggable={false}
					className="absolute top-0 left-0  z-20"
				/>

				{/* OVERLAY: outline trắng + spotlight hồng bám chuột */}
				<svg
					ref={svgRef}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox={`${VIEWBOX[0]} ${VIEWBOX[1]} ${VIEWBOX[2]} ${VIEWBOX[3]}`}
					className="absolute w-full h-full z-10 m-auto will-change-transform opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
				>
					<defs>
						<radialGradient
							id="spot"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform={gradientTransform}
						>
							<stop offset="0" stopColor="#ff3ea5" stopOpacity="1" />
							<stop offset={MID_OFFSET} stopColor="#ff3ea5" stopOpacity="0.2" />
							<stop offset="1" stopColor="#ff3ea5" stopOpacity="0" />
						</radialGradient>
					</defs>

					{/* Outline trắng để thấy đường nét rõ */}
					<g
						fill="none"
						stroke="#FFFFFF"
						strokeWidth={STROKE_WIDTH}
						strokeLinejoin="round"
						style={{ vectorEffect: "non-scaling-stroke" as any }}
						dangerouslySetInnerHTML={{ __html: SHAPES }}
						opacity={0.9}
					/>

					{/* Spotlight hồng nhỏ bám đường line */}
					<g
						fill="none"
						stroke="url(#spot)"
						strokeWidth={STROKE_WIDTH}
						strokeLinejoin="round"
						style={{ vectorEffect: "non-scaling-stroke" as any }}
						dangerouslySetInnerHTML={{ __html: SHAPES }}
					/>
				</svg>
			</span>
		</figure>
	);
};

export default DatabaseVisual;
