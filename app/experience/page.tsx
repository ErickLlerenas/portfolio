import { HiArrowNarrowRight } from "react-icons/hi";

import Link from "next/link";

export default function Experience() {
	return (
		<div className="items-center flex justify-center">
			<ol className="relative border-s border-gray-200 w-11/12 md:w-9/12 lg:w-1/2 py-32">
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						May 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900">
						Migration
					</h3>
					<p className="text-base font-normal text-gray-500">
						Deeper in the project I aquire knowledge on reading
						Angular code. I did not code on Angular but every day I
						was reading Angular code and migrating to React.
					</p>
				</li>
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						January 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900">
						Front-end development
					</h3>
					<p className="text-base font-normal text-gray-500">
						Got my first project with a big client and I was very
						happy to start working with them. I learnt strong
						knowledge on React and TypeScript
					</p>
				</li>
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						October - December 2021
					</time>
					<h3 className="text-lg font-semibold text-gray-900">
						Rockstar (Traninee Software Engineer)
					</h3>
					<p className="text-base font-normal text-gray-500">
						My first professional role was in an amazing rockstar
						program. It was an intense journey where I honed my
						skills to deliver top-notch work for clients.
					</p>
				</li>
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						2019 - 2020
					</time>
					<h3 className="text-lg font-semibold text-gray-900">
						Freelancer
					</h3>
					<p className="mb-4 text-base font-normal text-gray-500">
						The pandemic turned me into a freelancer. Thanks to my
						classmates&apos; referrals, I created web and mobile
						apps for local businesses, including a taxi service,
						educational platforms for kids, and news sites.
					</p>
					<Link
						href="/projects"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
					>
						Learn more
						<svg
							className="w-3 h-3 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</li>
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						2018 - 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900">
						University (Software Engineer)
					</h3>
					<p className="text-base font-normal text-gray-500">
						At university, I explored the depths of software
						engineering and graduated with a strong CGPA of 9.5.
					</p>
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
						2015 - 2018
					</time>
					<h3 className="text-lg font-semibold text-gray-900 ">
						High School (Programmer)
					</h3>
					<p className="text-base font-normal text-gray-500">
						I chose the programmer career at High School and started
						coding since I was 15 years old, I got very interested
						on becoming a software engineer when I discovered web
						and mobile development.
					</p>
				</li>
			</ol>
		</div>
	);
}
