import React from "react";
import logo from "../img/logo.png";
import soundOn from "../img/sound-on.gif";
import dancingBaby from "../img/dancing-baby.gif";
import music from "../img/music.gif";
import robots from "../img/robots.gif";

const MusicPage = () => {
	return (
		<div className="pt-12">
			<div className="flex justify-center items-center">
				<img src={soundOn} alt="sound on" className="h-4 sm:h-8" />
				<img src={logo} alt="logo" className="h-10 sm:h-16 mx-2" />
				<img src={soundOn} alt="sound on" className="h-4 sm:h-8" />
			</div>
			<div className="mt-6 flex items-center">
				<img src={dancingBaby} alt="dancing baby" className="w-16 md:w-32" />
				<div className="p-6 bg-blue-pure">
					<p className="text-lg text-white text-center">
						PLACEHOLDER TEXT FOR WHEN I CAN EMBED SOMETHING HERE. SOMEONE REMIND
						ME TO FIX THIS BEFORE I DEPLOY TO A LIVE SITE HAHA
					</p>
				</div>
				<img src={robots} alt="dancing robots" className="w-16 md:w-32" />
			</div>
			<img src={music} alt="music line" className="block mt-8 mx-auto h-16" />
		</div>
	);
};

export default MusicPage;
