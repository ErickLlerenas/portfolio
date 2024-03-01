import Image from "next/image";
import profilePicture from "../public/me.png";

export default function Home() {
  return (
    <main className="relative h-screen flex items-end justify-center pb-10 px-4 sm:px-10 md:px-20 lg:px-36">
      <div className="absolute top-0 left-0 ml-44 mt-44">
        <h1 className="text-gray-700 font-bold text-3xl md:text-7xl">
          Hey There,
          <span className="block">{"I'm Erick."}</span>
        </h1>
      </div>

      <div className="absolute top-0 right-0 mr-44 mt-44">
        <p className="text-gray-600 text-lg bg-white p-4 rounded-3xl rounded-bl-md">
          I do web and mobile
          <span className="block">development.</span>
        </p>
      </div>

      <Image
        src={profilePicture}
        alt="Erick Llerenas Profile Picture"
        width={400} // Ajuste fijo de ancho
        height={400} // Asegurando la relación de aspecto
        className="w-72 sm:w-64 md:w-96" // Ajustes de tamaño responsivo
      />

      <div className="absolute bottom-0 left-0 ml-44 mb-52">
        <span className="text-gray-600 font-extrabold text-3xl md:text-4xl">
          +3
        </span>
        <span className="block text-gray-600 text-lg md:text-xl">
          Years of experience
        </span>
      </div>

      <div className="absolute bottom-0 right-0 mr-44 mb-52">
        <span className="block text-gray-600 text-lg md:text-xl">
          Strong <b>SOLID</b> principles
        </span>
      </div>
    </main>
  );
}
