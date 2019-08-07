import React from "react";
import flamingLine from "../img/flamingline.gif";

const TopNavigation = ({ path }) => {
	return (
		<div className="pt-6">
			<div className="flex justify-center items-baseline">
				<a
					href="/"
					className={`mx-2 p-1 relative border border-transparent text-xl bg-red-pure text-white underline hover:border-white ${
						isActive(path, "/") ? "glow" : ""
					}`}
				>
					Home
				</a>
				<a
					href="/music"
					className={`mx-2 p-2 relative border border-transparent text-xl bg-orange-pure text-white underline hover:border-white ${
						isActive(path, "/music") ? "glow" : ""
					}`}
				>
					Music
				</a>
				<a
					href="/about"
					className={`mx-2 p-1 relative border border-transparent text-xl bg-yellow-pure text-black underline hover:border-white ${
						isActive(path, "/about") ? "glow" : ""
					}`}
				>
					About
				</a>
				<a
					href="/tour"
					className={`mx-2 p-3 relative border border-transparent text-xl bg-green-pure text-white underline hover:border-white ${
						isActive(path, "/tour") ? "glow" : ""
					}`}
				>
					Tour
				</a>
				<a
					href="/links"
					className={`mx-2 relative border border-transparent text-xl bg-teal-pure text-white underline hover:border-white ${
						isActive(path, "/links") ? "glow" : ""
					}`}
				>
					Links
				</a>
				<a
					href="/contact"
					className={`mx-2 p-4 relative border border-transparent text-xl bg-blue-pure text-white underline hover:border-white ${
						isActive(path, "/contact") ? "glow" : ""
					}`}
				>
					Contact
				</a>
			</div>
			<img src={flamingLine} alt="flaming line" className="mx-auto h-16" />
		</div>
	);
};

const isActive = (path, link) => {
	return String(path) === String(link);
};

export default TopNavigation;
