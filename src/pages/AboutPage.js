import React from "react";
import logo from "../img/logo.png";
import chill from "../img/chill.gif";
import BouncingText from "../components/BouncingText";
import ImageRow from "../components/ImageRow";
import gem from "../img/gem.gif";
import myPhotoAlbum from "../img/my-photo-album.gif";
import fluff from "../img/fluff.gif";
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
import cactus from "../img/cactus.gif";
import cat from "../img/cat.gif";
import dance from "../img/dance.gif";
import dj from "../img/dj.gif";
import dove from "../img/dove.gif";
import treble from "../img/treble.gif";
import homer from "../img/homer.gif";
import hot from "../img/hot.gif";
import skull from "../img/skull.gif";
import potato from "../img/potato.gif";
import runningMan from "../img/running-man.gif";
import rose from "../img/rose.gif";
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
			<div className="mt-12 mx-2 flex flex-col overflow-x-hidden">
				<div className="flex justify-center items-center overflow-x-hidden">
					<img src={myPhotoAlbum} alt="my album" className="w-16 md:w-24" />
					<div className="marquee-bounce-left">
						<BouncingText className="text-3xl text-yellow-pure text-center text-glow">
							My Photos!
						</BouncingText>
					</div>
					<img src={fluff} alt="fluffy smile" className="w-16 md:w-24" />
				</div>
				<div className="-ml-2 flex flex-row flex-wrap">
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "18rem"
						}}
					>
						<img
							src={img1}
							alt="1"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={cactus}
							alt="cactus"
							className="absolute z-10 top-0 left-0 h-16"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "10rem"
						}}
					>
						<img
							src={img2}
							alt="2"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={dove}
							alt="dove"
							className="absolute z-10 bottom-0 right-0 h-32"
							style={{
								transform: "scaleX(-1)",
								top: "10rem"
							}}
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "26rem"
						}}
					>
						<img
							src={img3}
							alt="3"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={cat}
							alt="cat"
							className="absolute z-10 bottom-0 right-0 h-16"
							style={{
								transform: "scaleX(-1)"
							}}
						/>
						<img
							src={dj}
							alt="dj"
							className="absolute z-10 top-0 left-0 h-16"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "8rem"
						}}
					>
						<img
							src={img6}
							alt="6"
							className="h-full w-full object-contain sm:object-fill"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "20rem"
						}}
					>
						<img
							src={img4}
							alt="4"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={treble}
							alt="treble"
							className="absolute z-10 top-0 right-0 h-12"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "12rem"
						}}
					>
						<img
							src={img5}
							alt="5"
							className="h-full w-full object-contain sm:object-fill"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "6rem"
						}}
					>
						<img
							src={img7}
							alt="7"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={dance}
							alt="dance"
							className="absolute z-10 bottom-0 left-0 h-32"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "24rem"
						}}
					>
						<img
							src={img8}
							alt="8"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={hot}
							alt="hot"
							className="absolute z-10 top-0 left-0 h-16"
						/>
						<img
							src={rose}
							alt="rose"
							className="absolute z-10 bottom-0 right-0 h-16"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "12rem"
						}}
					>
						<img
							src={img9}
							alt="9"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={potato}
							alt="potato"
							className="absolute z-10 top-0 right-0 h-16"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "24rem"
						}}
					>
						<img
							src={img10}
							alt="10"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={skull}
							alt="skull"
							className="absolute z-10 top-0 right-0 h-16"
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "24rem"
						}}
					>
						<img
							src={img11}
							alt="11"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={runningMan}
							alt="runningMan"
							className="absolute z-10 bottom-0 left-0 h-16"
							style={{
								transform: "scaleX(-1)"
							}}
						/>
					</div>
					<div
						className="relative mb-2 ml-2 flex-auto h-32 md:h-64"
						style={{
							width: "32rem"
						}}
					>
						<img
							src={img12}
							alt="12"
							className="h-full w-full object-contain sm:object-fill"
						/>
						<img
							src={homer}
							alt="homer"
							className="absolute z-10 bottom-0 right-0 h-16"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
