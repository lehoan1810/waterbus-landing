import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function ButtonTextAnimation() {
	const handleScroll = () => {
		const target = document.getElementById("pricing");
		target?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div
			onClick={handleScroll}
			className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer"
		>
			<span
				className={cn(
					"absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
				)}
				style={{
					WebkitMask:
						"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "destination-out",
					mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					maskComposite: "subtract",
					WebkitClipPath: "padding-box",
				}}
			/>
			🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
			<span
				style={
					{
						"--bg-size": `${1 * 300}%`,
						"--color-from": "#ffaa40",
						"--color-to": "#9c40ff",
					} as React.CSSProperties
				}
				className={cn(
					`inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
					"text-sm font-medium"
				)}
			>
				Introducing Waterbus
			</span>
			<ChevronRight
				className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
			/>
		</div>
	);
}
