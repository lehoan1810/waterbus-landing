"use client";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const CardBlazinglyFast = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	return (
		<div className="group flex overflow-hidden flex-col w-full md:h-[400px] col-span-6 md:col-span-12 xl:col-span-6 border-neutral-800 hover:border-neutral-600 duration-300 bg-neutral-900 border rounded-xl">
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
export default CardBlazinglyFast;
