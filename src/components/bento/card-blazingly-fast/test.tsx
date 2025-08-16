"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface Props {
	className?: string;
	hasGlow?: boolean;
	/** SVG nền hiển thị (nhìn thấy) */
	imageSrc?: string;
	/** SVG nguồn để lấy shapes vẽ spotlight (mặc định = imageSrc) */
	svgSrc?: string;
	/** độ dày đường stroke */
	strokeWidth?: number;
}

const DatabaseVisual: React.FC<Props> = ({
	className,
	hasGlow = true,
	imageSrc = "/images/animations_2.svg",
	svgSrc,
	strokeWidth = 1.25,
}) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const [vb, setVb] = useState<[number, number, number, number]>([
		0, 0, 390, 430,
	]);
	const [whiteMarkup, setWhiteMarkup] = useState<string>(""); // outline trắng
	const [pinkMarkup, setPinkMarkup] = useState<string>(""); // spotlight hồng
	const [pos, setPos] = useState({ x: 0, y: 0 });

	// Đọc SVG mới, lấy viewBox + clone shapes
	useEffect(() => {
		const url = svgSrc || imageSrc;
		let cancelled = false;

		(async () => {
			try {
				const res = await fetch(url);
				const raw = await res.text();
				const parser = new DOMParser();
				const doc = parser.parseFromString(raw, "image/svg+xml");
				const svgEl = doc.querySelector("svg");
				if (!svgEl) return;

				// viewBox
				const vbAttr = svgEl.getAttribute("viewBox");
				if (vbAttr) {
					const nums = vbAttr.split(/\s+/).map((n) => Number(n));
					if (nums.length === 4) setVb([nums[0], nums[1], nums[2], nums[3]]);
				} else {
					const w = Number(svgEl.getAttribute("width") || 390);
					const h = Number(svgEl.getAttribute("height") || 430);
					setVb([0, 0, w, h]);
				}

				// Thu thập các shape vector để stroke
				const shapes = svgEl.querySelectorAll(
					"path, polyline, polygon, line, rect, circle, ellipse"
				);

				const whiteGroup = doc.createElementNS(
					"http://www.w3.org/2000/svg",
					"g"
				);
				const pinkGroup = doc.createElementNS(
					"http://www.w3.org/2000/svg",
					"g"
				);

				shapes.forEach((node) => {
					// Outline trắng (nhìn rõ hình, không fill)
					const wNode = node.cloneNode(true) as Element;
					wNode.setAttribute("fill", "none");
					wNode.setAttribute("stroke", "#FFFFFF");
					wNode.setAttribute("stroke-linejoin", "round");
					wNode.setAttribute("vector-effect", "non-scaling-stroke");
					if (!wNode.getAttribute("stroke-width")) {
						wNode.setAttribute("stroke-width", String(strokeWidth));
					}
					whiteGroup.appendChild(wNode);

					// Spotlight hồng (gradient)
					const pNode = node.cloneNode(true) as Element;
					pNode.setAttribute("fill", "none");
					pNode.setAttribute("stroke", "url(#spot)");
					pNode.setAttribute("stroke-linejoin", "round");
					pNode.setAttribute("vector-effect", "non-scaling-stroke");
					if (!pNode.getAttribute("stroke-width")) {
						pNode.setAttribute("stroke-width", String(strokeWidth));
					}
					pinkGroup.appendChild(pNode);
				});

				if (!cancelled) {
					setWhiteMarkup(whiteGroup.innerHTML);
					setPinkMarkup(pinkGroup.innerHTML);
				}
			} catch (e) {
				console.warn("Cannot load SVG for spotlight:", e);
			}
		})();

		return () => {
			cancelled = true;
		};
	}, [imageSrc, svgSrc, strokeWidth]);

	// Move spotlight theo chuột (mapping sang viewBox)
	const handlePointerMove = useCallback(
		(e: React.PointerEvent) => {
			if (!hasGlow || !svgRef.current) return;
			const { clientX, clientY } = e;
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = requestAnimationFrame(() => {
				const rect = svgRef.current!.getBoundingClientRect();
				const [vbX, vbY, vbW, vbH] = vb;
				const x = (clientX - rect.left) * (vbW / rect.width) + vbX;
				const y = (clientY - rect.top) * (vbH / rect.height) + vbY;
				setPos({ x, y });
			});
		},
		[hasGlow, vb]
	);

	useEffect(() => {
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	const gradientTransform = `translate(${pos.x} ${pos.y}) rotate(45) scale(90 90)`;

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
				{/* Ảnh nền: chính là SVG mới để hiển thị tổng thể */}
				<Image
					src={imageSrc}
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

				{/* Lớp overlay vẽ outline + spotlight từ chính shapes của SVG mới */}
				<svg
					ref={svgRef}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox={`${vb[0]} ${vb[1]} ${vb[2]} ${vb[3]}`}
					className="absolute size-full z-10 m-auto will-change-transform opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
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
							<stop stopColor="#ff3ea5" />
							<stop offset="1" stopColor="#ffc0cb" />
						</radialGradient>
					</defs>

					{/* Outline trắng luôn hiện (nhẹ nhàng) */}
					<g dangerouslySetInnerHTML={{ __html: whiteMarkup }} opacity={0.9} />

					{/* Spotlight hồng bám theo chuột */}
					<g dangerouslySetInnerHTML={{ __html: pinkMarkup }} />
				</svg>
			</span>
		</figure>
	);
};

export default DatabaseVisual;
