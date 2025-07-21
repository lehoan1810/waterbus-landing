import { cn } from "@/lib/utils";
import Link from "next/link";

interface IButtonCustomProps {
	className?: string;
}

const ButtonCustom = (props: IButtonCustomProps) => {
	const { className = "" } = props;
	return (
		<Link
			href=""
			className={cn(
				"relative justify-center cursor-pointer items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-pink-400 dark:bg-pink-500 hover:bg-pink-500/80 dark:hover:bg-pink-400 text-foreground border-pink-400 dark:border-pink-400 hover:border-pink-100 dark:hover:border-pink-300 focus-visible:outline-pink-600 data-[state=open]:bg-pink-400/80 dark:data-[state=open]:bg-pink-500/80 data-[state=open]:outline-pink-600 text-xs px-2.5 py-1 h-[26px] hidden lg:block",
				className
			)}
		>
			Start your project
		</Link>
	);
};
export default ButtonCustom;
