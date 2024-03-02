import TaxiVideo from "@/public/taxi.gif";
import Coffee from "@/public/coffee.gif";
import INE from "@/public/ine.png";
import Delivery from "@/public/delivery.png";
import BeFast from "@/public/befast.gif";
import DriverScreens from "@/public/driver.png";
import DestinationSearch from "@/public/destination.png";
import AutocompleteSearch from "@/public/autocomplete.gif";
import Menu from "@/public/menu.png";

import Image, { StaticImageData } from "next/image";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mx-2 my-2">
      <div className="flex flex-col gap-2">
        <ProjectItem
          title="Taxi App (Reference)"
          alt="Taxi app UI design"
          video={TaxiVideo}
          year={2020}
        />
        <ProjectItem
          title="Documents Registry"
          alt="Documents Registry"
          video={INE}
          year={2023}
        />
        <ProjectItem
          title="Autocomplete search"
          alt="Autocomplete search"
          video={AutocompleteSearch}
          year={2024}
        />
      </div>

      <div className="flex flex-col gap-2">
        <ProjectItem
          title="Delivery app"
          alt="Delivery app flow"
          video={Delivery}
          year={2024}
        />

        <ProjectItem
          title="Phone Login"
          alt="Phone login flow"
          video={BeFast}
          year={2023}
        />
        <ProjectItem
          title="Destination Search"
          alt="Destination Search"
          video={DestinationSearch}
          year={2024}
        />
      </div>

      <div className="flex flex-col gap-2">
        <ProjectItem
          title="Coffee & Crepe POS (Inspiration)"
          alt="Coffee & Crepe POS UI"
          video={Coffee}
          year={2023}
        />
        <ProjectItem
          title="Driver screens"
          alt="Driver screens"
          video={DriverScreens}
          year={2023}
        />
        <ProjectItem title="Menu" alt="Menu" video={Menu} year={2023} />
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
