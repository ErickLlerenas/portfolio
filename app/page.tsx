import Image from "next/image";
import profilePicture from "../public/me.png";

export default function Home() {
  return (
    <main className="px-52 pt-44 tracking-wide">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-gray-700 font-bold text-7xl leading-snug">
          Hey There,
          <span className="block">{"I'm Erick."}</span>
        </h1>
        <div>
          <p className="text-gray-600 text-lg bg-white p-6 rounded-3xl rounded-bl-md">
            I do web and mobile
            <span className="block">development.</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="mt-64 flex flex-row items-center">
          <span className="text-gray-600 font-extrabold text-6xl">+3</span>
          <span className="ml-2 text-gray-600 text-xl">
            Years of experience
          </span>
        </div>

        <div className="mt-64 flex flex-row items-center">
          <span className="ml-2 text-gray-600 text-xl">
            Strong <b>SOLID</b> principles
          </span>
        </div>
      </div>

      <Image
        src={profilePicture}
        alt="Erick Llerenas Profile Picture"
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        style={{ width: 500 }}
      />
    </main>
  );
}
