import { FOOTER_NAV } from "@/constants/footer.constant";
import Image from "next/image";
import Link from "next/link";
import GitHubLight from "../../../public/svg/github";
import XformerlyTwitter from "../../../public/svg/x";
import DiscordLight from "../../../public/svg/discord";
import Bsky from "../../../public/svg/bsky";
import { cn } from "@/lib/utils";
import Zulip from "../../../public/svg/zulip";

const Footer = () => {
	return (
		<footer className="bg-neutral-900 text_custom_selection">
			<div className=" container relative mx-auto  py-16 px-4 md:px-12 lg:px-16 xl:px-20 ">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8 xl:col-span-1">
						<Link href="/" className="flex items-center justify-start gap-2 ">
							<Image
								src="/images/img_logo-footer.png"
								alt="Waterbus Open Source"
								width={160}
								height={31.25}
								className="h-5 w-fit object-contain"
							/>
						</Link>
						<div className="flex items-center justify-start gap-5">
							<Link target="_blank" href="https://x.com/">
								<XformerlyTwitter className="size-5 text-neutral-500 hover:text-white duration-300" />
							</Link>
							<Link
								target="_blank"
								href="https://github.com/waterbustech/waterbus"
							>
								<GitHubLight className="size-5 text-neutral-500 hover:text-white duration-300" />
							</Link>

							<Link
								target="_blank"
								href="https://waterbus.zulipchat.com/join/n5b2dof6flynjnxsv62dfodd/"
							>
								<Zulip className="size-5 text-neutral-500 hover:text-white duration-300" />
							</Link>
							<Link
								target="_blank"
								href="https://bsky.app/profile/waterbus.tech"
							>
								<Bsky className="size-5 text-neutral-500 hover:text-white duration-300" />
							</Link>
						</div>
					</div>
					<div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
						<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
							{FOOTER_NAV.map((item) => (
								<div
									key={item.title}
									className={cn("space-y-4", item.className)}
								>
									<h3 className="text-base font-medium">{item.title}</h3>
									<div className="mt-4  flex flex-col gap-3">
										{item.children.map((child) => (
											<Link
												className="text-neutral-500 text-sm font-normal hover:text-white duration-300"
												key={child.label}
												href={child.href}
											>
												{child.label}
											</Link>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="mt-16 flex flex-col gap-3 border-t border-separator1 pt-3 text-xs text-fg3 lg:flex-row lg:justify-between">
					<p className="text-xs text-[#999999] font-light">
						© 2025 Waterbus. Open source under the Apache 2.0 License.
					</p>
					<div>
						<Link target="_blank" href="https://status.waterbus.tech/">
							<div className="flex items-center gap-2 whitespace-nowrap text-primary">
								<span className="relative block size-1.5">
									<span className="absolute left-0 top-0 z-50 block size-1.5 origin-center animate-ping rounded-px duration-1000 bg-primary"></span>
									<span className="block size-1.5 rounded-px duration-1000 bg-primary"></span>
								</span>
								<span className="font-mono text-[10px] font-bold uppercase tracking-wider">
									all systems operational
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
