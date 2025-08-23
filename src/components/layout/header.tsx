"use client";

import AnimationContainer from "@/components/ui/animation-container";
import { buttonVariants } from "@/components/ui/button";
import ButtonCustom from "@/components/ui/button-custom";
import ButtonGithubStar from "@/components/ui/button-github-star";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import MobileNavbar from "@/components/ui/mobile-navbar";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/constants/nav.constant";
import { cn } from "@/lib/utils";
import { ChevronRight, LucideIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 8) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 inset-x-0 h-16 w-full border-b border-transparent z-[99999] select-none",
				"bg-[#121212]"
			)}
		>
			<MaxWidthWrapper className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
				<div className="flex items-center space-x-12">
					<Link href="/" className="flex items-center justify-start gap-2">
						<Image
							src="/images/img_logo-footer.png"
							alt="Waterbus Open Source"
							width={128}
							height={16}
							className="w-full h-4 object-contain"
							priority
						/>
					</Link>

					<NavigationMenu className="hidden lg:flex ">
						<NavigationMenuList>
							{NAV_LINKS.map((link) => (
								<NavigationMenuItem key={link.title}>
									{link.menu ? (
										<>
											<NavigationMenuTrigger>
												{link.title}
											</NavigationMenuTrigger>
											<NavigationMenuContent className="bg-[#121212]">
												<ul
													className={cn(
														"grid gap-1 p-4   md:w-[400px] lg:w-[500px] rounded-xl",
														link.title === "developers"
															? "lg:grid-cols-[.75fr_1fr]"
															: "lg:grid-cols-2"
													)}
												>
													{(link?.menu || [])?.map((item, index) => (
														<div key={index}>
															<p className="text-neutral-400 px-3 block font-mono text-xs uppercase tracking-widest mb-5">
																{item.title}
															</p>
															{(item?.subMenu || [])?.map((menuItem) => (
																<ListItem
																	key={menuItem.title}
																	title={menuItem.title}
																	href={menuItem.href}
																	icon={menuItem.icon}
																></ListItem>
															))}
														</div>
													))}
												</ul>
											</NavigationMenuContent>
										</>
									) : (
										<div>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
												href={link.href}
											>
												{link.title}
											</NavigationMenuLink>
										</div>
									)}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className=" items-center gap-2 hidden lg:flex  animate-fade-in !scale-100 delay-300">
					<ButtonGithubStar />
				</div>

				<MobileNavbar />
			</MaxWidthWrapper>
		</header>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		title: string;
		icon: LucideIcon | React.ComponentType<any>;
	}
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					href={href!}
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-lg px-3 leading-none no-underline outline-none transition-all duration-100 ease-out  focus:bg-accent ",
						className
					)}
					{...props}
				>
					<div className="flex items-center group space-x-2 text-foreground-light hover:text-white duration-200 transition-all ease-out ">
						<Icon className="h-4 w-4 text-current" />
						<div className="flex items-center justify-start gap-2">
							<h6 className="text-sm font-medium w-fit">{title}</h6>
							<ChevronRight className="size-3 text-transparent translate-x-[-10px] group-hover:text-current transition-all duration-300 ease-out group-hover:translate-x-[-4px]" />
						</div>
					</div>
					<p
						title={children! as string}
						className="line-clamp-1 text-sm leading-snug text-muted-foreground"
					>
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Navbar;
