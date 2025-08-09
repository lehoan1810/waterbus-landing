import { WorldMap } from "@/components/bento/card-distributed/world-map";

interface ICard1Props {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

const CardDistributed = (_props: ICard1Props) => {
	const { title, description, icon } = _props;
	return (
		<div className="group group relative  h-full md:h-[400px] flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 hover:border-neutral-600 duration-300 bg-neutral-900 col-span-6 md:col-span-12 xl:col-span-6">
			<div className=" flex items-start flex-col gap-4 top-0 left-0 px-8 pb-4 pt-8">
				<div className="flex items-center gap-2">
					{icon}
					<p className="text-base font-medium text-white">{title}</p>
				</div>
				<p className="text-sm font-medium text-neutral-500">{description}</p>
			</div>
			<div className="hidden md:flex px-8 h-full bg-neutral-900">
				<WorldMap
					dots={[
						{
							start: {
								lat: 64.2008,
								lng: -149.4937,
							}, // Alaska (Fairbanks)
							end: {
								lat: 34.0522,
								lng: -118.2437,
							}, // Los Angeles
						},
						{
							start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
							end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
						},
						{
							start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
							end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
						},
						{
							start: { lat: 51.5074, lng: -0.1278 }, // London
							end: { lat: 28.6139, lng: 77.209 }, // New Delhi
						},
						{
							start: { lat: 28.6139, lng: 77.209 }, // New Delhi
							end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
						},
						{
							start: { lat: 28.6139, lng: 77.209 }, // New Delhi
							end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
						},
					]}
				/>
			</div>
		</div>
	);
};
export default CardDistributed;
