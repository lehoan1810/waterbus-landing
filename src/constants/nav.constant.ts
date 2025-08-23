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
		menu: [
			{
				title: "Developers",
				subMenu: [
					{
						title: "Documentation",
						href: "https://docs.waterbus.tech/en/core",
						icon: BookText,
					},
					{
						title: "Changelog",
						href: "https://changelog.waterbus.tech/",
						icon: RefreshCcwDot,
					},
					{
						title: "Support",
						href: "mailto:lambiengcode@gmail.com",
						icon: LifeBuoy,
					},
				],
			},
			{
				title: "Resources",
				subMenu: [
					{
						title: "Github",
						href: "https://github.com/waterbustech/waterbus-rs",
						icon: GitHubLight,
					},
					{
						title: "Discussions",
						href: "https://github.com/orgs/waterbustech/discussions",
						icon: MessageSquareMore,
					},
					{
						title: "Sponsor",
						href: "#pricing",
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
		href: "#pricing",
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
