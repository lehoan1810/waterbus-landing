import {
	BookText,
	HeartHandshake,
	LifeBuoy,
	LockIcon,
	MessageSquareMore,
	RefreshCcwDot,
} from "lucide-react";
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
						icon: RefreshCcwDot,
					},
					{
						title: "Support",
						href: "/features/link-shortening",
						icon: LifeBuoy,
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
						title: "Discussions",
						href: "/",
						icon: MessageSquareMore,
					},
					{
						title: "Sponsor",
						href: "/",
						icon: HeartHandshake,
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
	// {
	// 	title: "Blog",
	// 	href: "https://blog.waterbus.tech/",
	// },
];
