import React from "react";
import flamingLine from "../img/flamingline.gif";

const TopNavigation = () => {
	return (
		<div>
			<div className="flex justify-center items-baseline">
				<a
					href="/"
					className="mx-2 p-1 text-xl bg-red-pure text-white underline hover:text-2xl"
				>
					Home
				</a>
				<a
					href="/"
					className="mx-2 p-2 text-xl bg-orange-pure text-white underline hover:text-2xl"
				>
					Music
				</a>
				<a
					href="/"
					className="mx-2 p-1 text-xl bg-yellow-pure text-black underline hover:text-2xl"
				>
					About
				</a>
				<a
					href="/"
					className="mx-2 p-3 text-xl bg-green-pure text-white underline hover:text-2xl"
				>
					Tour
				</a>
				<a
					href="/"
					className="mx-2 text-xl bg-teal-pure text-white underline hover:text-2xl"
				>
					Links
				</a>
				<a
					href="/"
					className="mx-2 p-4 text-xl bg-blue-pure text-white underline hover:text-2xl"
				>
					Contact
				</a>
			</div>
			<img src={flamingLine} alt="flaming line" className="mx-auto h-16" />
		</div>
	);
};

export default TopNavigation;
