import TaxiVideo from "@/public/taxi.gif";
import Coffee from "@/public/coffee.gif";
import INE from "@/public/ine.png";
import BeFast from "@/public/befast.gif";

import Image, { StaticImageData } from "next/image";

export default function Projects() {
	return (
		<section className="grid grid-cols-3 gap-2 mx-2 my-2">
			<div className="flex flex-col gap-2">
				<ProjectItem
					title="Taxi App"
					alt="Taxi app UI design"
					video={TaxiVideo}
					year={2019}
				/>
				<ProjectItem
					title="Be Fast"
					alt="Be Fast"
					video={INE}
					year={2023}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div className="h-72 w-full bg-fuchsia-700 rounded-xl flex justify-center items-center">
					WIP
				</div>

				<ProjectItem
					title="Be Fast"
					alt="Be fast"
					video={BeFast}
					year={2023}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div className="h-52 w-full bg-red-700 rounded-xl flex justify-center items-center">
					WIP
				</div>

				<ProjectItem
					title="Coffee & Crepe POS"
					alt="Coffee & Crepe POS UI"
					video={Coffee}
					year={2023}
				/>
				<div className="h-52 w-full bg-orange-400 rounded-xl flex justify-center items-center">
					WIP
				</div>
			</div>
		</section>
	);
}

function ProjectItem({
	video,
	alt,
	title,
	year,
}: {
	video: StaticImageData;
	alt: string;
	title: string;
	year: number;
}) {
	return (
		<div className="relative">
			<Image src={video} alt={alt} className="w-full rounded-xl" />
			<div className="absolute bottom-0 p-2 bg-white bg-opacity-30 rounded-t-md w-full flex flex-row justify-between">
				<span>{title}</span>
				<span>{year}</span>
			</div>
		</div>
	);
}
