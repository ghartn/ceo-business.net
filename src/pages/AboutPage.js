import React from "react";
import logo from "../img/logo.png";
import chill from "../img/chill.gif";
import BouncingText from "../components/BouncingText";
import ImageRow from "../components/ImageRow";
import gem from "../img/gem.gif";
import myPhotoAlbum from "../img/my-photo-album.gif";
import fluff from "../img/fluff.gif";
import Gallery from "react-photo-gallery";
import img1 from "../img/1.jpg";
import img2 from "../img/2.gif";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.gif";
import img7 from "../img/7.gif";
import img8 from "../img/8.jpg";
import img9 from "../img/9.gif";
import img10 from "../img/10.jpg";
import img11 from "../img/11.gif";
import img12 from "../img/12.jpg";
import cat from "../img/cat.gif";
import homer from "../img/homer.gif";
import open24Hours from "../img/open-24-hours.gif";

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
				<div className="flex p-8 bg-yellow-pure justify-center items-center relative">
					<img src={chill} alt="chill guy" className="h-48" />
					<img
						src={cat}
						alt="cat"
						className="h-8 md:h-12 absolute z-10"
						style={{
							top: "-3rem",
							right: 0,
							transform: "scaleX(-1)"
						}}
					/>
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
			<div className="mt-12 mx-2 flex justify-center items-center overflow-x-hidden">
				<img src={myPhotoAlbum} alt="my album" className="w-16 md:w-24" />
				<div className="marquee-bounce-left">
					<BouncingText className="text-3xl text-yellow-pure text-center text-glow">
						My Photos!
					</BouncingText>
				</div>
				<img src={fluff} alt="fluffy smile" className="w-16 md:w-24" />
			</div>
			<div className="relative mx-2 overflow-y-visible">
				<Gallery
					targetRowHeight={240}
					margin={4}
					photos={[
						{
							src: img1,
							width: 4,
							height: 3
						},
						{
							src: img2,
							width: 25,
							height: 38
						},
						{
							src: img3,
							width: 125,
							height: 72
						},
						{
							src: img4,
							width: 4,
							height: 3
						},
						{
							src: img5,
							width: 169,
							height: 179
						},
						{
							src: img6,
							width: 88,
							height: 155
						},
						{
							src: img7,
							width: 61,
							height: 88
						},
						{
							src: img8,
							width: 4,
							height: 3
						},
						{
							src: img9,
							width: 79,
							height: 90
						},
						{
							src: img10,
							width: 191,
							height: 138
						},
						{
							src: img11,
							width: 4,
							height: 3
						},
						{
							src: img12,
							width: 27,
							height: 10
						}
					]}
				/>
				<img
					src={homer}
					alt="homer"
					className="h-12 md:h-24 absolute z-10"
					style={{
						right: 0,
						bottom: "-2rem"
					}}
				/>
			</div>
			<img
				src={open24Hours}
				alt="open 24 hours"
				className="ml-2 mt-1 block w-32 md:w-64"
			/>
		</div>
	);
};

export default AboutPage;
