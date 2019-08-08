import React from "react";
import logo from "../img/logo.png";
import chill from "../img/chill.gif";
import BouncingText from "../components/BouncingText";

const AboutPage = () => {
	return (
		<div className="pt-12">
			<BouncingText className="text-3xl text-white text-center text-glow">
				LEARN ABOUT CEO AT BUSINESS DOT NET
			</BouncingText>
			<div className="mx-4 md:mx-0 mt-8 flex flex-col md:flex-row justify-center glow">
				<div className="p-6 bg-purple-pure flex-1">
					<p className="text-lg text-white">
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
				<div className="p-8 bg-yellow-pure">
					<img src={chill} alt="chill guy" className="h-48" />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
