"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const BorderBeam = dynamic(
	() =>
		import("@/components/layout/banner/border-beam").then((m) => m.BorderBeam),
	{
		ssr: false,
	}
);
const GlobeV2 = dynamic(
	() => import("@/components/ui/globe-v2").then((m) => m.Globe),
	{
		ssr: false,
	}
);

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const CardDistributed = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="group group relative  h-full md:h-[400px] flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 hover:border-neutral-600 duration-300 bg-neutral-900 col-span-6 md:col-span-12 xl:col-span-6"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isHovered && <BorderBeam duration={12} size={250} />}
			<div className="flex  justify-between h-full">
				<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
					<div className="flex items-center gap-2">
						{icon}
						<p className="text-base font-medium text-white">{title}</p>
					</div>
					<p className="text-sm font-medium text-neutral-500">{description}</p>
				</div>
				<div className="hidden md:flex  h-full bg-neutral-900">
					<GlobeV2 />
				</div>
			</div>
		</div>
	);
};
export default CardDistributed;
