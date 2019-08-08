import React from "react";
import BouncingText from "../components/BouncingText";
import instagram from "../img/instagram.gif";
import twitter from "../img/twitter.gif";
import soundcloud from "../img/soundcloud.gif";
import gaymart from "../img/gaymart.gif";

const LinksPage = () => {
	return (
		<div className="pt-12">
			<BouncingText className="mx-6 md:mx-0 text-3xl text-yellow-pure text-center text-glow">
				FOLLOW MY SOCIAL MEDIA IT IS CRITICALLY IMPORTANT
			</BouncingText>
			<div className="mt-12 flex justify-center">
				<a
					href="https://instagram.com/lentralentra"
					rel="noopener"
					target="_blank"
				>
					<img src={instagram} alt="instagram" className="h-16 md:h-32" />
				</a>
				<a
					href="https://twitter.com/lentralentra"
					rel="noopener"
					target="_blank"
				>
					<img src={twitter} alt="twitter" className="ml-12 h-16 md:h-32" />
				</a>
				<a href="https://soundcloud.com/lentra" rel="noopener" target="_blank">
					<img src={soundcloud} alt="soundcloud" className="h-16 md:h-32" />
				</a>
			</div>
			<div className="mt-32 flex flex-col md:flex-row justify-center items-center">
				<img src={gaymart} alt="gaymart" className="h-20" />
				<h2 className="px-4 text-2xl text-pink-pure">
					THIS PAGE SPONSPORED BY
				</h2>
				<img src={gaymart} alt="gaymart" className="h-20" />
			</div>
		</div>
	);
};

export default LinksPage;
