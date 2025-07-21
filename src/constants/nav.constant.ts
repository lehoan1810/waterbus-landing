import { BookText, LockIcon, MessageSquareMore } from "lucide-react";
import GitHubLight from "../../public/svg/github";

export const NAV_LINKS = [
	{
		title: "Developers",
		href: "/developers",
		menu: [
			{
				title: "Developers",
				subMenu: [
					{
						title: "Documentation",
						href: "/features/link-shortening",
						icon: BookText,
					},
					{
						title: "Changelog",
						href: "https://changelog.waterbus.tech/",
						icon: BookText,
					},
					{
						title: "Support",
						href: "/features/link-shortening",
						icon: BookText,
					},
				],
			},
			{
				title: "Resources",
				subMenu: [
					{
						title: "Github",
						href: "/",
						icon: GitHubLight,
					},
					{
						title: "Github Discussions",
						href: "/",
						icon: MessageSquareMore,
					},
					{
						title: "Sponsor",
						href: "/",
						icon: MessageSquareMore,
					},
				],
			},
		],
	},
	{
		title: "Community",
		href: "https://discord.com/",
	},
	{
		title: "Pricing",
		href: "/pricing",
	},

	{
		title: "Docs",
		href: "https://docs.waterbus.tech/",
	},
	{
		title: "Blog",
		href: "https://blog.waterbus.tech/",
	},
];
