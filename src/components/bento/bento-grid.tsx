"use client";
import CardAdaptiveStream from "@/components/bento/card-adaptive-stream";
import CardBlazinglyFast from "@/components/bento/card-blazingly-fast";
import CardDistributed from "@/components/bento/card-distributed";
import CardEgress from "@/components/bento/card-egress";
import CardHybridTopology from "@/components/bento/card-hybrid-topology";
import CardVirtualBackground from "@/components/bento/card-virtual-background";
import { BorderBeam } from "@/components/layout/banner/border-beam";
import {
	Activity,
	Cable,
	ImagePlus,
	PictureInPicture,
	ScatterChart,
	Share,
	ShipWheel,
	SquareArrowOutUpRight,
	Upload,
	Zap,
} from "lucide-react";
import { Fragment } from "react";

interface IBentoGridProps {
	// Props go here
}

const listContentCard = [
	{
		id: 1,
		children: (
			<CardBlazinglyFast
				title="Blazingly Fast"
				description="Built in Rust for low-latency performance and maximum efficiency, handling real-time media at scale."
				icon={<Zap />}
			/>
		),
	},
	{
		id: 2,
		children: (
			<CardHybridTopology
				title="Hybrid Topology"
				description="Supports SFU and P2P, dynamically optimizing media routing by network and location."
				icon={<Cable />}
			/>
		),
	},
	{
		id: 3,
		children: (
			<CardAdaptiveStream
				title="Adaptive Stream"
				description="Smart bandwidth-aware simulcast handling. Automatically adjusts video quality in real-time to ensure smooth playback."
				icon={<Activity />}
			/>
		),
	},
	{
		id: 4,
		children: (
			<CardEgress
				title="Egress"
				description="Stream your sessions to HLS. Plug in custom pipelines for archiving, compliance, or broadcasting."
				icon={<SquareArrowOutUpRight />}
			/>
		),
	},
	{
		id: 5,
		children: (
			<CardVirtualBackground
				title="Virtual Background"
				description="AI-powered background blur and replacement, running client-side or via custom compute egress nodes."
				icon={<ImagePlus />}
			/>
		),
	},
	{
		id: 6,
		children: (
			<CardDistributed
				title="Distributed"
				description="Horizontally scalable architecture with Redis-backed signaling and media coordination across multiple nodes."
				icon={<ShipWheel />}
			/>
		),
	},
];

const BentoGrid = (_props: IBentoGridProps) => {
	return (
		<div className="container mx-auto px-4 md:px-12 lg:px-16 xl:px-20 overflow-hidden grid grid-cols-1 gap-4  md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
			{listContentCard.map((item) => (
				<Fragment key={item.id}>{item.children}</Fragment>
			))}
		</div>
	);
};
export default BentoGrid;
