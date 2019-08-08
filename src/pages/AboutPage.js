import React from "react";
import logo from "../img/logo.png";
import chill from "../img/chill.gif";
import BouncingText from "../components/BouncingText";
import ImageRow from "../components/ImageRow";
import gem from "../img/gem.gif";
import myPhotoAlbum from "../img/my-photo-album.gif";
import fluff from "../img/fluff.gif";

const AboutPage = () => {
	return (
		<div className="pt-12">
			<BouncingText className="text-4xl text-green-pure text-center text-glow">
				LEARN ABOUT ME!!!
			</BouncingText>
			<div className="mx-2 mt-8 flex flex-col md:flex-row justify-center glow">
				<div className="p-4 bg-purple-pure flex-1">
					<div className="marquee-bounce-right">
						<h2 className="text-3xl mb-4 text-white underline text-shadow">
							Biography
						</h2>
					</div>
					<p className="text-lg text-white leading-relaxed">
						<img src={logo} alt={logo} className="inline h-8" /> was born in
						1995 to parents George Lucas (unrelated) and Melinda Gates
						(unrelated). His mother is a hedge fund manager for Lex Wexner, and
						his father is the current CFO for Hit Rekkids LLC, a massive record
						and distribution company which currently owns 8 of the 10 major
						radio networks, a majority stakeholder in Spotifoo, and is currently
						at the cutting edge of researching human genome improvements. He
						makes music (along with a massive team of writers and producers)
						mostly for fun - with a song in the Billboard Top 10 for 83 weeks
						straight, primarily on the back of 19-week number 1 song{" "}
						<i>
							We Love To Work (Don't We Folks) [feat. lil diaper baby & Former
							President Obama]
						</i>
						.
					</p>
				</div>
				<div className="flex p-8 bg-yellow-pure justify-center items-center">
					<img src={chill} alt="chill guy" className="h-48" />
				</div>
			</div>
			<ImageRow
				className="mt-6 -mr-2 flex justify-center w-full overflow-x-hidden"
				imgSrc={gem}
				imgAlt={"gem"}
				imgClassName={"h-12 md:h-16"}
				howMany={9}
				spacing={2}
			/>
			<div className="mt-12 mx-2 w-full md:w-2/3 md:mx-auto flex flex-col overflow-x-hidden">
				<div className="flex justify-center items-center overflow-x-hidden">
					<img src={myPhotoAlbum} alt="my album" className="w-16 md:w-24" />
					<div className="marquee-bounce-left">
						<BouncingText className="text-3xl text-yellow-pure text-center text-glow">
							My Photos!
						</BouncingText>
					</div>
					<img src={fluff} alt="fluffy smile" className="w-16 md:w-24" />
				</div>
				<div className="md:-mx-2 flex flex-wrap">
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-red-pure" />
					</div>
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-orange-pure" />
					</div>
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-yellow-pure" />
					</div>
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-green-pure" />
					</div>
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-blue-pure" />
					</div>
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-indigo-pure" />
					</div>
					<div className="block w-full md:w-1/2 lg:w-1/3 p-2">
						<div className="block h-48 bg-pink-pure" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
