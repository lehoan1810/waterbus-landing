"use client";

import { AnimatedBeamDemo } from "@/components/bento/card-hybrid-topology/AnimatedBeamDemo";
import { BeamB2B } from "@/components/bento/card-hybrid-topology/Beam-b2b";
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
			className="group md:h-[400px] relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800  duration-300 bg-neutral-900  col-span-6 xl:col-span-3"
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
			<div className="hidden md:flex flex-col gap-5 w-full h-full items-start justify-center">
				<BeamB2B />
				<AnimatedBeamDemo />
			</div>
		</div>
	);
};
export default CardHybridTopology;
