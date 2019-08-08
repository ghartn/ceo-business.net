import React from "react";
import logo from "../img/logo.png";
import dancingBaby from "../img/dancing-baby.gif";
import robots from "../img/robots.gif";
import dollar from "../img/dollar.gif";

const MusicPage = () => {
	return (
		<div className="pt-12">
			<h1 className="text-5xl text-white blink text-center">
				Listen To
				<img src={logo} alt="logo" className="inline h-12 sm:h-16 ml-2" />
			</h1>
			<div className="mt-12 flex justify-center">
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12" />
			</div>
			<div className="mt-6 flex items-center">
				<img src={dancingBaby} alt="dancing baby" className="w-16 md:w-32" />
				<div className="p-6 mr-6 bg-blue-pure">
					<p className="text-lg text-white text-center">
						PLACEHOLDER TEXT FOR WHEN I CAN EMBED SOMETHING HERE. SOMEONE REMIND
						ME TO FIX THIS BEFORE I DEPLOY TO A LIVE SITE HAHA
					</p>
				</div>
				<img src={robots} alt="dancing robots" className="w-16 md:w-32" />
			</div>
			<div className="mt-6 flex justify-center">
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12 mr-2" />
				<img src={dollar} alt="spinning dollar sign" className="h-12" />
			</div>
		</div>
	);
};

export default MusicPage;
