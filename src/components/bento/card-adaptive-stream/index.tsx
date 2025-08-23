"use client";

import { useState } from "react";
import { BorderBeam } from "@/components/layout/banner/border-beam";
import { NotebookIcon } from "lucide-react";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

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
		</div>
	);
};
export default CardAdaptiveStream;
