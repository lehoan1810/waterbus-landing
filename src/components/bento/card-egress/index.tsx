import DatabaseWithRestApi from "@/components/bento/card-egress/cloudflare-card";
import { NotebookIcon } from "lucide-react";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const CardEgress = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	return (
		<div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 hover:border-neutral-600 duration-300 bg-neutral-900  col-span-6 xl:col-span-3 md:h-[400px]">
			<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
				<div className="flex items-center gap-2">
					{icon}
					<p className="text-base font-medium text-white">{title}</p>
				</div>
				<p className="text-sm font-medium text-neutral-500">{description}</p>
			</div>
			<div className="hidden md:flex w-full h-full items-start justify-center pt-10">
				<DatabaseWithRestApi />
			</div>
		</div>
	);
};
export default CardEgress;
