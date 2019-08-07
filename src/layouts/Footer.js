import React from "react";
import counter from "../img/counter.gif";
import fireworks from "../img/fireworks.gif";

const Footer = () => {
	return (
		<div className="pt-24 pb-12 flex flex-col">
			{/* <marquee behavior="scroll" direction="left">
				<div className="text-xl">
					<span className="text-red-pure underline">Don't </span>
					<span className="text-orange-pure underline">Forget </span>
					<span className="text-yellow-pure underline">To </span>
					<span className="text-green-pure underline">Subscribe </span>
					<span className="text-teal-pure underline">To </span>
					<span className="text-blue-pure underline">Our </span>
					<span className="text-indigo-pure underline">Mailing </span>
					<span className="text-purple-pure underline">List</span>
					<span className="text-pink-pure underline">!!!</span>
				</div>
	</marquee> */}
			<div className="pt-4 flex items-center justify-center">
				<img src={fireworks} alt="fireworks" className="h-12 px-2" />
				<p className="text-blue-pure text-lg">
					You are the{" "}
					<img src={counter} alt="counter" className="px-1 inline" /> visitor to
					this website! Congratulations!
				</p>
				<img src={fireworks} alt="fireworks" className="h-12 px-2" />
			</div>
			<div className="pt-4 text-center">
				<p className="text-gray-700">
					&copy; Copyright Web Master 2019. All Rights Reserved &trade;; Trade
					Mark Of the Web Master
				</p>
			</div>
		</div>
	);
};

export default Footer;
