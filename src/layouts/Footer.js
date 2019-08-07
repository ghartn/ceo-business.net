import React from "react";

const Footer = () => {
	return (
		<div>
			<marquee behavior="scroll" direction="left">
				<div className="text-xl underline">
					<span className="text-red-pure">Don't </span>
					<span className="text-orange-pure">Forget </span>
					<span className="text-yellow-pure">To </span>
					<span className="text-green-pure">Subscribe </span>
					<span className="text-teal-pure">To </span>
					<span className="text-blue-pure">Our </span>
					<span className="text-indigo-pure">Mailing </span>
					<span className="text-purple-pure">List</span>
					<span className="text-pink-pure">!!!</span>
				</div>
			</marquee>
		</div>
	);
};

export default Footer;
