import React from "react";
import { Link } from "react-router-dom";
import flamingLine from "../img/flamingline.gif";

const TopNavigation = ({ path }) => {
	return (
		<div className="pt-6">
			<div className="flex justify-center items-center flex-wrap">
				<Link
					to="/"
					className={`mx-2 p-1 relative border border-transparent text-xl bg-red-pure text-white underline hover:border-white ${
						isActive(path, "/") ? "glow" : ""
					}`}
				>
					Home
				</Link>
				<Link
					to="/music"
					className={`mx-2 p-2 relative border border-transparent text-xl bg-orange-pure text-white underline hover:border-white ${
						isActive(path, "/music") ? "glow" : ""
					}`}
				>
					Music
				</Link>
				<Link
					to="/about"
					className={`mx-2 p-1 relative border border-transparent text-xl bg-yellow-pure text-black underline hover:border-white ${
						isActive(path, "/about") ? "glow" : ""
					}`}
				>
					About
				</Link>
				<Link
					to="/tour"
					className={`mx-2 p-3 relative border border-transparent text-xl bg-green-pure text-white underline hover:border-white ${
						isActive(path, "/tour") ? "glow" : ""
					}`}
				>
					Tour
				</Link>
				<Link
					to="/links"
					className={`mx-2 relative border border-transparent text-xl bg-teal-pure text-white underline hover:border-white ${
						isActive(path, "/links") ? "glow" : ""
					}`}
				>
					Links
				</Link>
				<Link
					to="/contact"
					className={`mx-2 p-4 relative border border-transparent text-xl bg-blue-pure text-white underline hover:border-white ${
						isActive(path, "/contact") ? "glow" : ""
					}`}
				>
					Contact
				</Link>
			</div>
			<img src={flamingLine} alt="flaming line" className="mx-auto h-12" />
		</div>
	);
};

const isActive = (path, link) => {
	return String(path) === String(link);
};

export default TopNavigation;
