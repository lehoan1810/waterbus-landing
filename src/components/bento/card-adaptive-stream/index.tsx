"use client";

import { useState } from "react";
import { BorderBeam } from "@/components/layout/banner/border-beam";
import { NotebookIcon, Sparkles } from "lucide-react";
import DisplayCards from "@/components/bento/card-virtual-background/display-card";

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
		titleClassName: "",
		className:
			"[grid-area:stack] hover:-translate-y-5 before:absolute  border hover:border-green-500 hover:text-green-500 text-neutral-500",
	},
	{
		icon: <Sparkles className="size-4 text-blue-300" />,
		title: "720px",
		description: "Trending this week",
		date: "2 days ago",
		iconClassName: "text-blue-500",
		titleClassName: "",
		className:
			"[grid-area:stack]  translate-x-12 translate-y-10 hover:-translate-y-1  border hover:border-blue-500 hover:text-blue-500 text-neutral-500",
	},
	{
		icon: <Sparkles className="size-4 text-blue-300" />,
		title: "480px",
		description: "Latest updates and features",
		date: "Today",
		iconClassName: "text-blue-500",
		titleClassName: "",
		className:
			"[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 border hover:border-red-500 hover:text-red-500 text-neutral-500",
	},
];

const CardAdaptiveStream = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className=" group md:h-[400px] flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 hover:border-neutral-600 duration-300 bg-neutral-900  col-span-6 xl:col-span-3 relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && <BorderBeam duration={7} size={120} />}
			<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
				<div className="flex items-center gap-2">
					{icon}
					<p className="text-base font-medium text-white">{title}</p>
				</div>
				<p className="text-sm font-medium text-neutral-500">{description}</p>
			</div>
			<div className="hidden md:flex w-full h-full items-center justify-center pb-10">
				<DisplayCards cards={defaultCards} />
			</div>
		</div>
	);
};
export default CardAdaptiveStream;
