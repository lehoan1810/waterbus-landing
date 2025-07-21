import { BorderBeam } from "@/components/layout/banner/border-beam";
import { Cursor, CursorFollow, CursorProvider } from "@/components/ui/cursor";

interface IVideoHomeProps {
	videoUrl?: string;
}

const VideoHome = (_props: IVideoHomeProps) => {
	const { videoUrl = "https://media.waterbus.tech/waterbus-demo.mp4" } = _props;
	return (
		<>
			<div className="relative rounded-2xl shadow-lg p-2 h-full border flex flex-col overflow-hidden lg:order-last bg-default w-full max-w-6xl border-neutral-700 mx-auto ">
				<BorderBeam duration={10} size={200} />
				<div className="w-full px-2 pt-1 pb-3 relative flex items-center gap-1.5 lg:gap-2">
					<div className="w-2 h-2 bg-red-600 rounded-full"></div>
					<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
					<div className="w-2 h-2 bg-green-600 rounded-full"></div>
				</div>
				<div className="h-full w-full aspect-video border border-neutral-700 overflow-hidden rounded-lg">
					<div
						style={{ opacity: 1 }}
						className="relative w-full max-w-full h-full"
					>
						<video
							className="relative z-10 block w-full h-full "
							src={videoUrl}
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
				</div>
				<CursorProvider>
					<Cursor>
						<svg
							className="size-6 text-blue-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 40 40"
						>
							<path
								fill="currentColor"
								d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
							/>
						</svg>
					</Cursor>
					<CursorFollow>
						<div className="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm shadow-lg">
							Demo waterbus
						</div>
					</CursorFollow>
				</CursorProvider>
			</div>
		</>
	);
};
export default VideoHome;
