"use client";
import { BellIcon, FileTextIcon, Share2Icon } from "lucide-react";
import AnimatedBeamMultipleOutputDemo from "@/components/bento/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/bento/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/bento/bento-grid";
import { Marquee } from "@/components/bento/marquee";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { bento_card_files } from "@/constants/card-bento.constant";
import { OrbitingCirclesDemo } from "@/components/bento/orbiting-circles-demo";

const features = [
	{
		Icon: FileTextIcon,
		name: "Save your files",
		description: "We automatically save your files as you type.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-1",
		background: (
			<Marquee
				continueOnHover
				className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
			>
				{bento_card_files.map((f, idx) => (
					<figure
						key={idx}
						className={cn(
							"relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
							"border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
							"transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
						)}
					>
						<div className="flex flex-row items-center gap-2">
							<div className="flex flex-col">
								<figcaption className="text-sm font-medium text-white ">
									{f.name}
								</figcaption>
							</div>
						</div>
						<blockquote className="mt-2 text-xs">{f.body}</blockquote>
					</figure>
				))}
			</Marquee>
		),
	},

	{
		Icon: Share2Icon,
		name: "Integrations",
		description: "Supports 100+ integrations and counting.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-2",
		background: (
			<Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
		),
	},
	{
		Icon: Share2Icon,
		name: "Integrations",
		description: "Supports 100+ integrations and counting.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-2",
		background: <OrbitingCirclesDemo />,
	},
	{
		Icon: BellIcon,
		name: "Notifications",
		description: "Get notified when something happens.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-1",
		background: (
			<AnimatedListDemo className="absolute right-2 top-4 h-[400px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
		),
	},
];

export function BentoDemo() {
	return (
		<BentoGrid>
			{features.map((feature, idx) => (
				<BentoCard key={idx} {...feature} />
			))}
		</BentoGrid>
	);
}
