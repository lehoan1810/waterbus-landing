"use client";
import { Menu, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { NAV_LINKS } from "@/constants/nav.constant";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface IMobileNavbarProps {
	// Props go here
}

const MobileNavbar = (_props: IMobileNavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex items-center  lg:hidden">
			{isOpen ? (
				<Button size="icon" variant="secondary">
					<XIcon
						className="size-5 cursor-pointer"
						onClick={() => setIsOpen(false)}
					/>
				</Button>
			) : (
				<MenuIcon
					className="size-5 cursor-pointer"
					onClick={() => setIsOpen(true)}
				/>
			)}
			{isOpen && (
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetContent className="z-[999999]">
						<SheetHeader>
							<SheetTitle></SheetTitle>
							<SheetDescription></SheetDescription>
							<div className="py-10">
								<Accordion
									type="single"
									collapsible
									className="w-full"
									defaultValue="item-1"
								>
									{NAV_LINKS.map((link) => (
										<AccordionItem value={link.title} key={link.title}>
											{link?.menu?.length && link?.menu?.length > 0 ? (
												<AccordionTrigger className="text-base font-medium">
													{link.title}
												</AccordionTrigger>
											) : (
												<Link
													className="py-4 text-base font-medium block"
													href={link.href}
												>
													{link.title}
												</Link>
											)}
											<AccordionContent className="flex flex-col gap-6 text-balance">
												{link?.menu?.map((menu, index) => (
													<p
														className="flex flex-col gap-2 text-neutral-500"
														key={index}
													>
														<span className="uppercase  font-semibold text-neutral-400 text-sm">
															{menu.title}
														</span>
														{menu?.subMenu?.map((subMenu, index) => (
															<Link
																className="font-medium"
																href={subMenu?.href}
																key={index}
															>
																{subMenu.title}
															</Link>
														))}
													</p>
												))}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			)}
		</div>
	);
};
export default MobileNavbar;
