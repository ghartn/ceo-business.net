import React from "react";
import coolLinks from "../img/cool-links.gif";
import instagram from "../img/instagram.gif";
import twitter from "../img/twitter.gif";
import soundcloud from "../img/soundcloud.gif";
import arrow from "../img/arrow.gif";
import BouncingText from "../components/BouncingText";
import future from "../img/future.gif";
import proudParent from "../img/proud-parent.gif";
import webaholic from "../img/webaholic.gif";
import lottery from "../img/lottery.gif";
import celibacy from "../img/celibacy.gif";
import puzzle from "../img/puzzle.gif";
import award1 from "../img/award1.gif";
import award2 from "../img/award2.gif";
import award3 from "../img/award3.gif";
import award4 from "../img/award4.gif";
import award5 from "../img/award5.gif";
import award6 from "../img/award6.gif";
import award8 from "../img/award8.gif";
import award9 from "../img/award9.gif";
import award10 from "../img/award10.gif";
import award11 from "../img/award11.gif";
import award12 from "../img/award12.gif";
import award13 from "../img/award13.gif";
import award14 from "../img/award14.gif";
import award15 from "../img/award15.gif";

const LinksPage = () => {
	return (
		<div className="pt-12">
			<img src={coolLinks} alt="COOL LINKS" className="mx-4 w-full" />
			<div className="mt-12 flex justify-center items-center">
				<img
					src={arrow}
					alt="rainbow arrow"
					className="h-8 md:h-24"
					style={{ transform: "scaleX(-1)" }}
				/>
				<a
					href="https://instagram.com/lentralentra"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img src={instagram} alt="instagram" className="h-16 md:h-32" />
				</a>
				<a
					href="https://twitter.com/lentralentra"
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className="h-16 w-16 md:h-32 md:w-32">
						<img src={twitter} alt="twitter" className="max-h-full mx-auto" />
					</div>
				</a>
				<a
					href="https://soundcloud.com/lentra"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img src={soundcloud} alt="soundcloud" className="h-16 md:h-32" />
				</a>
				<img src={arrow} alt="rainbow arrow" className="h-8 md:h-24" />
			</div>
			<img src={coolLinks} alt="COOL LINKS" className="mt-12 mx-4 w-full" />
			<div className="mt-24 mb-4 w-full flex flex-col justify-center items-center">
				<BouncingText className="px-4 text-xl sm:text-3xl font-bold text-pink-pure text-glow text-center">
					CHECK OUT OUR INTERNET FRIENDS!
				</BouncingText>
				<img
					src={future}
					alt="future divider"
					className="mb-4 mx-4 w-full sm:w-1/2 mx-auto"
				/>
				<div className="flex flex-wrap justify-center lg:justify-between">
					<a
						href="https://google.com"
						rel="noopener noreferrer"
						target="_blank"
						className="block mr-2 mt-8 lg:mt-0"
					>
						<img src={proudParent} alt="proud parent" className="h-32" />
					</a>
					<a
						href="https://google.com"
						rel="noopener noreferrer"
						target="_blank"
						className="block mr-2 mt-8 lg:mt-0"
					>
						<img src={webaholic} alt="webaholic" className="h-32" />
					</a>
					<a
						href="https://google.com"
						rel="noopener noreferrer"
						target="_blank"
						className="block mr-2 mt-8 lg:mt-0"
					>
						<img src={lottery} alt="lottery" className="h-32" />
					</a>
					<a
						href="https://google.com"
						rel="noopener noreferrer"
						target="_blank"
						className="block mx-auto bg-white mt-8"
					>
						<img src={celibacy} alt="celibacy forum" className="h-16" />
					</a>
				</div>
				<div className="mt-16">
					<h1
						className="text-4xl mb-4 text-center text-white text-glow blink"
						style={{ fontFamily: "'Comic Sans MS', cursive" }}
					>
						<span className="inline-block text-red-pure">O</span>
						<span className="inline-block text-orange-pure">U</span>
						<span className="inline-block text-yellow-pure">R</span>
						&nbsp;
						<span className="inline-block text-green-pure">W</span>
						<span className="inline-block text-blue-pure">E</span>
						<span className="inline-block text-indigo-pure">B</span>
						&nbsp;
						<span className="inline-block text-purple-pure">A</span>
						<span className="inline-block text-pink-pure">W</span>
						<span className="inline-block text-red-pure">A</span>
						<span className="inline-block text-orange-pure">R</span>
						<span className="inline-block text-yellow-pure">D</span>
						<span className="inline-block text-green-pure">S</span>
						<span className="inline-block text-blue-pure">!</span>
						<span className="inline-block text-indigo-pure">!</span>
						<span className="inline-block text-purple-pure">!</span>
					</h1>
					<img src={puzzle} alt="puzzle line" className="w-full" />
					<div className="-ml-2 flex flex-wrap w-full">
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award2} alt="award 2" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award3} alt="award 3" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award4} alt="award 4" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award5} alt="award 5" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award6} alt="award 6" className="w-full h-full" />
						</div>

						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award13} alt="award 13" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award8} alt="award 8" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award10} alt="award 10" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award11} alt="award 11" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award1} alt="award 1" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award12} alt="award 12" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award9} alt="award 9" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award14} alt="award 14" className="w-full h-full" />
						</div>
						<div className="mb-2 ml-2 flex-auto flex-shrink-0 h-16 sm:h-32">
							<img src={award15} alt="award 15" className="w-full h-full" />
						</div>
					</div>
					<img src={puzzle} alt="puzzle line" className="w-full" />
				</div>
			</div>
		</div>
	);
};

export default LinksPage;
