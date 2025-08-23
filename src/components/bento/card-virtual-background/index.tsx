"use client";
import { BorderBeam } from "@/components/layout/banner/border-beam";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const defaultCards = [
	{
		icon: <Sparkles className="size-4 text-blue-300" />,
		title: "1080px",
		description: "Discover",
		date: "Just now",
		iconClassName: "text-blue-500",
		titleClassName: "text-blue-500",
		className:
			"[grid-area:stack] hover:-translate-y-5 before:absolute before:w-[100%] before:outline-1  before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
	},
	{
		icon: <Sparkles className="size-4 text-blue-300" />,
		title: "720px",
		description: "Trending this week",
		date: "2 days ago",
		iconClassName: "text-blue-500",
		titleClassName: "text-blue-500",
		className:
			"[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1  before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 ",
	},
	{
		icon: <Sparkles className="size-4 text-blue-300" />,
		title: "480px",
		description: "Latest updates and features",
		date: "Today",
		iconClassName: "text-blue-500",
		titleClassName: "text-blue-500",
		className:
			"[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
	},
];

const CardVirtualBackground = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className="group group md:h-[400px] relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800  duration-300 bg-neutral-900  col-span-6 xl:col-span-3"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && <BorderBeam duration={10} size={200} />}
			<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
				<div className="flex items-center gap-2">
					{icon}
					<p className="text-base font-medium text-white">{title}</p>
				</div>
				<p className="text-sm font-medium text-neutral-500">{description}</p>
			</div>
		</div>
	);
};
export default CardVirtualBackground;
