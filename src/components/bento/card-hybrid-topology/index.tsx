"use client";

import P2PTopology from "@/components/bento/card-hybrid-topology/Beam-b2b";
import DatabaseWithRestApi from "@/components/bento/card-hybrid-topology/DatabaseWithRestApi";
import { BorderBeam } from "@/components/layout/banner/border-beam";
import { useState } from "react";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const CardHybridTopology = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="group md:h-[400px] relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800  duration-300 bg-neutral-900  col-span-6 xl:col-span-3 transition-all "
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && <BorderBeam duration={8} size={150} />}
			<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
				<div className="flex items-center gap-2">
					{icon}
					<p className="text-base font-medium text-white">{title}</p>
				</div>
				<p className="text-sm font-medium text-neutral-500">{description}</p>
			</div>
			<div className="hidden md:flex relative w-full h-full items-start justify-center">
				<div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out will-change-[opacity] opacity-100 group-hover:opacity-0 pointer-events-none">
					<P2PTopology />
				</div>
				<div className="absolute inset-0 transition-opacity duration-300 ease-out will-change-[opacity] opacity-0 group-hover:opacity-100 pointer-events-none">
					<DatabaseWithRestApi />
				</div>
			</div>
		</div>
	);
};
export default CardHybridTopology;
