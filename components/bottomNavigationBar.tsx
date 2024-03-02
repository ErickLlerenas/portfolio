import Link from "next/link";
import { IconType } from "react-icons";
import { AiFillHome, AiFillFile } from "react-icons/ai";
import { BsFillSuitcaseLgFill, BsLinkedin } from "react-icons/bs";
import { FaTools } from "react-icons/fa";

export default function BottomNavigationBar() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <NavigationItem
          title="Home"
          href="/"
          Icon={AiFillHome}
          classname="rounded-s-full"
        />

        <NavigationItem
          title="Experience"
          href="/experience"
          Icon={AiFillFile}
        />
        <NavigationItem
          title="Projects"
          href="/projects"
          Icon={BsFillSuitcaseLgFill}
        />
        <NavigationItem title="Skills" href="/skills" Icon={FaTools} />
        <NavigationItem
          title="Linkedin"
          href="https://www.linkedin.com/in/erick-llerenas/"
          Icon={BsLinkedin}
          classname="rounded-e-full"
          target="_blank"
        />
      </div>
    </div>
  );
}

function NavigationItem({
  title,
  href,
  Icon,
  classname,
  target,
}: {
  title: string;
  href: string;
  Icon: IconType;
  classname?: string;
  target?: string;
}) {
  return (
    <>
      <Link
        target={target}
        data-tooltip-target={title}
        href={href}
        className={
          "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 " +
          classname
        }
      >
        <Icon className="text-2xl text-gray-600" />
        <span className="text-sm">{title}</span>
      </Link>
      <div
        id={title}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow />
      </div>
    </>
  );
}
