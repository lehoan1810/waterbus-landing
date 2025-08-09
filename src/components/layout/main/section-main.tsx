interface ISectionMainProps {
	// Props go here
}

const SectionMain = (_props: ISectionMainProps) => {
	return (
		<div className="relative pt-40">
			<div className="will-change-opacity absolute h-[414px] overflow-hidden w-full -top-16 mask-[radial-gradient(90%_80%_at_50%_100%,#D9D9D9_80%,rgba(115,115,115,0)_100%)] md:mask-[radial-gradient(50%_65.7%_at_50%_34.3%,#D9D9D9_0%,rgba(115,115,115,0)_100%)]">
				<div className="transform-gpu top-1/2 -translate-y-1/2 absolute h-[60px] md:h-[90px] w-full left-1/2 -translate-x-1/2 md:blur-[50px] blur-[25px] [border-radius:50%_100%] bg-[#a624b4] mix-blend-plus-lighter"></div>
				<div className="transform-gpu absolute top-1/2 -translate-y-1/2 h-[60px] md:h-[90px] w-full -right-[35%] md:blur-[50px] blur-[25px] [border-radius:50%_100%] bg-[#fd79f0] mix-blend-plus-lighter"></div>
				<div className="transform-gpu absolute top-1/2 -translate-y-1/2 h-[60px] md:h-[90px] w-full -left-[35%] md:blur-[50px] blur-[25px] [border-radius:50%_100%] bg-[#edabff] mix-blend-plus-lighter"></div>
			</div>
			<div className="overflow-hidden pt-[75px] lg:pt-[80px] left-[0px] w-full md:w-[calc(100dvw-16px)] md:rounded-[24px] lg:rounded-[48px] bg-[#12121236] gradient-border">
				<div className="max-w-6xl mx-auto flex flex-col gap-y-16 items-center justify-center">
					<div className="px-6 flex flex-col gap-y-5 w-full sm:w-3/4 md:w-2/3 lg:w-[60%] xl:w-full items-center justify-center text-center text_custom_selection">
						<p className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent ">
							Host meetings, go live, and monitor in real time
						</p>
						<p className="text-center max-w-[300px] md:max-w-none mx-auto text-sm sm:text-base lg:text-lg">
							with built-in video, virtual backgrounds, and beauty filters
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SectionMain;
