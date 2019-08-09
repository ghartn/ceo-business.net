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
import Gallery from "react-photo-gallery";

const LinksPage = () => {
	return (
		<div className="pt-12">
			<img src={coolLinks} alt="COOL LINKS" className="px-4 w-full" />
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
			<img src={coolLinks} alt="COOL LINKS" className="mt-12 px-4 w-full" />
			<div className="mt-24 mb-4 w-full flex flex-col justify-center items-center">
				<BouncingText className="px-4 text-xl sm:text-3xl font-bold text-pink-pure text-glow text-center">
					CHECK OUT OUR INTERNET FRIENDS!
				</BouncingText>
				<img
					src={future}
					alt="future divider"
					className="mb-4 mx-4 w-full sm:w-1/2 mx-auto"
				/>
				<div className="flex flex-wrap justify-center w-full">
					<a
						href="https://lentra.ca"
						rel="noopener noreferrer"
						target="_blank"
						className="block mr-2 mt-8 lg:mt-0"
					>
						<img src={proudParent} alt="proud parent" className="h-32" />
					</a>
					<a
						href="https://lentra.ca"
						rel="noopener noreferrer"
						target="_blank"
						className="block mr-2 mt-8 lg:mt-0"
					>
						<img src={webaholic} alt="webaholic" className="h-32" />
					</a>
					<a
						href="https://lentra.ca"
						rel="noopener noreferrer"
						target="_blank"
						className="block mr-2 mt-8 lg:mt-0"
					>
						<img src={lottery} alt="lottery" className="h-32" />
					</a>
				</div>
				<a
					href="https://lentra.ca"
					rel="noopener noreferrer"
					target="_blank"
					className="block mx-auto bg-white mt-8"
				>
					<img src={celibacy} alt="celibacy forum" className="h-16" />
				</a>
				<div className="mt-24">
					<h1
						className="text-xl sm:text-4xl mb-4 text-center text-white text-glow blink"
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
					<Gallery
						photos={[
							{
								src: award1,
								width: 4,
								height: 3
							},
							{
								src: award2,
								width: 21,
								height: 29
							},
							{
								src: award3,
								width: 8,
								height: 5
							},
							{
								src: award4,
								width: 5,
								height: 8
							},
							{
								src: award5,
								width: 1,
								height: 1
							},
							{
								src: award6,
								width: 1,
								height: 1
							},
							{
								src: award8,
								width: 1,
								height: 1
							},
							{
								src: award9,
								width: 34,
								height: 23
							},
							{
								src: award10,
								width: 243,
								height: 334
							},
							{
								src: award11,
								width: 50,
								height: 47
							},
							{
								src: award12,
								width: 21,
								height: 26
							},
							{
								src: award13,
								width: 13,
								height: 8
							},
							{
								src: award14,
								width: 1,
								height: 1
							},
							{
								src: award15,
								width: 64,
								height: 49
							}
						]}
					/>
					<img src={puzzle} alt="puzzle line" className="w-full" />
				</div>
			</div>
		</div>
	);
};

export default LinksPage;
