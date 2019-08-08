import React from "react";
import counter from "../img/counter.gif";
import fireworks from "../img/fireworks.gif";

const Footer = () => {
	return (
		<div className="pt-24 pb-4 flex flex-col">
			<div className="pt-4 flex items-center justify-center">
				<img src={fireworks} alt="fireworks" className="h-12 px-2" />
				<p className="text-blue-pure text-lg text-center">
					You are the{" "}
					<img src={counter} alt="counter" className="px-1 inline" /> visitor to
					this website! Congratulations!
				</p>
				<img src={fireworks} alt="fireworks" className="h-12 px-2" />
			</div>
			<div className="pt-4 text-center">
				<p className="text-sm text-gray-700">
					&copy; Copyright Web Master 2019. All Rights Reserved &trade;; Trade
					Mark Of the Web Master
				</p>
			</div>
		</div>
	);
};

export default Footer;
