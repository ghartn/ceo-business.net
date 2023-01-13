import React from "react";
import logo from "../img/logo.png";
import soundOn from "../img/sound-on.gif";
import dancingBaby from "../img/dancing-baby.gif";
import music from "../img/music.gif";
import robots from "../img/robots.gif";
import dance from "../img/dance.gif";
import dj from "../img/dj.gif";

const MusicPage = () => {
	return (
		<div className="pt-12">
			<div className="flex flex-col md:flex-row justify-center items-center">
				<img src={soundOn} alt="sound on" className="h-4 sm:h-8" />
				<img src={logo} alt="logo" className="h-10 sm:h-16 mx-2" />
				<img src={soundOn} alt="sound on" className="h-4 sm:h-8" />
			</div>
			<div className="mt-6 flex items-center justify-center">
				<img src={dancingBaby} alt="dancing baby" className="w-16 md:w-32" />
				<div className="flex flex-col">
					<div className="relative p-6 mb-4 bg-red-pure">
						<iframe
							title="ceo@business.net - cry about it"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/PDplREoE5n4"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="relative p-6 mb-4 bg-blue-pure">
					<iframe
							title="ceo@business.net - circus"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/em2uo0IlHn4"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="relative p-6 mb-4 bg-orange-pure">
					<iframe
							title="ceo@business.net - suhwee"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/TiQQD937CFo"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="relative p-6 bg-purple-pure">
					<iframe
							title="ceo@business.net - take a trip"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/MWXdpxgbndw"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<img
							src={dj}
							alt="dj"
							className="h-16 absolute z-10"
							style={{
								top: "-2rem",
								left: 0
							}}
						/>
						<img
							src={dance}
							alt="dance"
							className="h-16 absolute z-10"
							style={{
								right: 0,
								bottom: "-2rem"
							}}
						/>
					</div>
				</div>
				<img src={robots} alt="dancing robots" className="w-16 md:w-32" />
			</div>
			<img src={music} alt="music line" className="block mt-8 mx-auto h-16" />
		</div>
	);
};

export default MusicPage;
