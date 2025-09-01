"use client";
import VirtualBackgroundIcon from "@/components/bento/card-virtual-background/virtual-card";
import { BorderBeam } from "@/components/layout/banner/border-beam";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

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
			<div className="hidden md:flex w-full h-full items-center justify-center ">
				<VirtualBackgroundIcon />
			</div>
		</div>
	);
};
export default CardVirtualBackground;
