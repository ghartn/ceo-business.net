import React from "react";
import { Link } from "react-router-dom";
import counter from "../img/counter.gif";
import fireworks from "../img/fireworks.gif";
import ie4 from "../img/ie4.gif";
import familySafe from "../img/family-safe.gif";
import home from "../img/home.gif";

const Footer = () => {
	return (
		<div className="relative pt-32 pb-4 flex flex-col">
			<div className="pt-4 flex items-center justify-center">
				<img src={fireworks} alt="fireworks" className="h-12 px-2" />
				<p className="text-blue-pure text-lg text-center">
					You are the{" "}
					<img src={counter} alt="counter" className="px-1 inline" /> visitor to
					this website! Congratulations!
				</p>
				<img src={fireworks} alt="fireworks" className="h-12 px-2" />
			</div>
			<div className="pt-4 flex items-center justify-center text-center">
				<p className="text-lg text-gray-700">
					This page best viewed in{" "}
					<img src={ie4} alt="ie4" className="inline h-8 px-2" />
				</p>
			</div>
			<div className="pt-4 text-center">
				<p className="text-sm text-gray-700 w-1/2 mx-auto">
					&copy; Copyright Web Master 2019. All Rights Reserved &trade;; Trade
					Mark Of the Web Master
				</p>
			</div>
			<Link to="/" className="absolute left-0 bottom-0 h-6 sm:h-10 md:h-20 m-4">
				<img src={home} alt="home " className="max-h-full" />
			</Link>
			<img
				src={familySafe}
				alt="family safe website"
				className="absolute right-0 bottom-0 h-6 sm:h-10 md:h-20 m-4"
			/>
		</div>
	);
};

export default Footer;
