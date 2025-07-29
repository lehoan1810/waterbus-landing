import Link from "next/link";

interface ISectionPricingProps {
	// Props go here
}

const SectionPricing = (_props: ISectionPricingProps) => {
	return (
		<div className="grid gap-4 mt-20 md:grid-cols-2 md:gap-4">
			<div className="flex flex-col items-center space-y-4 border py-4  min-h-72">
				<h4 className="text-2xl font-bold py-4">Free</h4>
				<ul className="space-y-2 text-sm text-muted-foreground ">
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check inline text-green-400"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</svg>{" "}
						Full access to all features
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check inline text-green-400"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</svg>{" "}
						Regular updates
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check inline text-green-400"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</svg>{" "}
						Comprehensive documentation
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check inline text-green-400"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</svg>{" "}
						Support on GitHub and Discord
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check inline text-green-400"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</svg>{" "}
						Plenty copy-pastable examples
					</li>
				</ul>
				<div className="flex-1"></div>
				<a
					className="block border rounded p-2 mx-4 text-center hover:border-primary transition-colors self-stretch text-muted-foreground hover:text-primary"
					href="/docs"
				>
					Get started
				</a>
			</div>
			<div className="flex flex-col items-center space-y-4 border py-4   min-h-72 border-pink-400">
				<h4 className="text-2xl font-bold py-4">Pay what you want</h4>
				<ul className="space-y-2 text-sm text-muted-foreground">
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check-check inline text-green-400"
						>
							<path d="M18 6 7 17l-5-5"></path>
							<path d="m22 10-7.5 7.5L13 16"></path>
						</svg>{" "}
						Everything in Free
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-heart inline text-pink-400 align-bottom"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
						</svg>{" "}
						Contribute to sustainable open source
					</li>
				</ul>
				<div className="flex-1"></div>
				<div className="self-stretch mx-4 text-primary/70">
					<div className="text-xs pb-2 text-center">
						66% towards $950 per month goal
					</div>
					<div className=" w-full h-2 bg-muted rounded-full overflow-hidden">
						<div
							className="h-full bg-pink-400 transition-all duration-500 ease-in-out"
							style={{ width: "65.7895%" }}
						></div>
					</div>
				</div>
				<Link
					className="block border text-primary border-pink-400/50 rounded p-2 mx-4 text-center hover:border-pink-400 transition-colors self-stretch"
					href="https://github.com/sponsors/lambiengcode"
				>
					Become a sponsor
				</Link>
			</div>
		</div>
	);
};
export default SectionPricing;
