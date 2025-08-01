"use client";

import { useState } from "react";
import DecryptedText from "@/components/HeadingReveal/decrypt-text";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "tertiary"
	| "link"
	| "rust"
	| "typescript"
	| "assembly"
	| "anchor"
	| "general";

export interface ButtonProps {
	label?: string;
	className?: string;
	onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	icon?: string;
	iconSide?: "left" | "right";
	size?: "sm" | "md" | "lg";
	iconSize?: 18 | 14 | 12 | 8;
}

export default function ButtonCustomV2({
	label,
	className,
	onClick,
	disabled,
	variant = "primary",
	icon,
	iconSide = "left",
	iconSize = 18,
	size = "md",
}: ButtonProps) {
	const [isHovering, setIsHovering] = useState<boolean>(false);
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			className={cn(
				"font-mono text-[15px] group/button flex items-center cursor-pointer justify-center font-medium gap-x-2 flex-shrink-0 gradient-border ",

				// Sizes
				{
					"px-2 py-1 rounded-xl text-xs leading-none": size === "sm",
					"px-4.5 py-2.5 rounded-md text-sm leading-none": size === "md",
					"px-6 py-4 rounded-2xl text-base leading-none": size === "lg",
				},

				{
					"transition before:[background:linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0.15)_100%)] text-background [background:radial-gradient(161.28%_68.75%_at_50%_68.75%,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.5)_100%),_#FC5C9C] shadow-[0px_0px_12px_rgba(252,92,156,0.24),inset_0px_-1px_0px_rgba(252,92,156,0.8),inset_0px_1px_4px_#FC5C9C] hover:shadow-[0px_0px_20px_rgba(252,92,156,0.24),inset_0px_-1px_0px_rgba(252,92,156,0.8),inset_0px_1px_4px_#FC5C9C]":
						variant === "primary" || variant === "general",
					"transition bg-[linear-gradient(180deg,_#171A20_0%,_rgba(23,_26,_32,_0)_100%)] text-brand-secondary before:bg-[linear-gradient(180deg,_rgba(0,255,255,0.13)_0%,_rgba(0,255,255,0.08)_100%)]":
						variant === "secondary",
					"transition bg-[linear-gradient(180deg,_#171A20_0%,_rgba(23,_26,_32,_0)_100%),linear-gradient(0deg,#0B0E14_0%,_#0B0E14_100%)] text-secondary before:bg-[linear-gradient(180deg,_rgba(206,213,228,0.2)_0%,_rgba(206,213,228,0.1)_100%)]":
						variant === "tertiary",
					"text-white": variant === "link",
					"transition before:[background:linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0.15)_100%)] shadow-[0px_0px_12px_rgba(245,255,255,0.25)] [background:radial-gradient(161.28%_68.75%_at_50%_68.75%,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.5)_100%),_#DDEAE0] text-black before:bg-[linear-gradient(180deg,_rgba(0,255,255,0.13)_0%,_rgba(0,255,255,0.08)_100%)]":
						variant === "anchor",
					"transition before:[background:linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0.15)_100%)] shadow-[0px_0px_12px_rgba(255,173,102,0.25)] [background:radial-gradient(161.28%_68.75%_at_50%_68.75%,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.25)_100%),_#FFAD66] text-black before:bg-[linear-gradient(180deg,_rgba(0,255,255,0.13)_0%,_rgba(0,255,255,0.08)_100%)]":
						variant === "rust",
					"transition before:[background:linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0.15)_100%)] shadow-[0px_0px_12px_rgba(140,255,102,0.25)] [background:radial-gradient(161.28%_68.75%_at_50%_68.75%,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.25)_100%),_#8CFF66] text-black before:bg-[linear-gradient(180deg,_rgba(0,255,255,0.13)_0%,_rgba(0,255,255,0.08)_100%)]":
						variant === "assembly",
					"transition before:[background:linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0.15)_100%)] shadow-[0px_0px_12px_rgba(102,163,255,0.25)] [background:radial-gradient(161.28%_68.75%_at_50%_68.75%,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.25)_100%),_#69A2F1] text-black before:bg-[linear-gradient(180deg,_rgba(0,255,255,0.13)_0%,_rgba(0,255,255,0.08)_100%)]":
						variant === "typescript",
				},
				className
			)}
		>
			{label && <DecryptedText isHovering={isHovering} text={label} />}
			{variant === "link" && (
				<MoveUpRight className="size-3 transition-all flex-shrink-0 group-hover/button:translate-x-0.5 text-neutral-600" />
			)}
		</button>
	);
}
