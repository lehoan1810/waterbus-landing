"use client";

import { useState } from "react";
import DatabaseVisualSupabase from "@/components/bento/card-blazingly-fast/supabase";
import DatabaseVisual from "@/components/bento/card-blazingly-fast/test";
import { BorderBeam } from "@/components/layout/banner/border-beam";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const CardBlazinglyFast = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="group flex flex-row overflow-hidden  w-full md:h-[400px] col-span-6 md:col-span-12 xl:col-span-6 border-neutral-800  duration-300 bg-neutral-900 border rounded-xl relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* {isHovered && <BorderBeam duration={10} size={200} />} */}
			<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
				<div className="flex items-center gap-2">
					{icon}
					<p className="text-base font-medium text-white">{title}</p>
				</div>
				<p className="text-sm font-medium text-neutral-500">{description}</p>
			</div>
			<div className="relative w-full h-full hidden md:block">
				<DatabaseVisualSupabase />
			</div>
		</div>
	);
};
export default CardBlazinglyFast;
