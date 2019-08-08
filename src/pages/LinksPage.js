import React from "react";
import coolLinks from "../img/cool-links.gif";
import instagram from "../img/instagram.gif";
import twitter from "../img/twitter.gif";
import soundcloud from "../img/soundcloud.gif";
import arrow from "../img/arrow.gif";
import future from "../img/future.gif";
import gaymart from "../img/gaymart.gif";

const LinksPage = () => {
	return (
		<div className="pt-12">
			<img
				src={coolLinks}
				alt="COOL LINKS"
				className="mx-4 w-full sm:w-2/3 mx-auto"
			/>
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
			<img
				src={coolLinks}
				alt="COOL LINKS"
				className="mt-12 mx-4 w-full sm:w-2/3 mx-auto"
			/>
			<img
				src={future}
				alt="future divider"
				className="mt-32 mx-4 w-full sm:w-1/2 mx-auto"
			/>
			<div className="mt-4 flex flex-col md:flex-row justify-center items-center">
				<img src={gaymart} alt="gaymart" className="h-16 md:h-32" />
				<h2 className="px-4 text-xl sm:text-3xl font-bold text-pink-pure text-center">
					THIS PAGE SPONSPORED BY
				</h2>
				<img src={gaymart} alt="gaymart" className="h-16 md:h-32" />
			</div>
			<img
				src={future}
				alt="future divider"
				className="mt-4 mx-4 w-full sm:w-1/2 mx-auto"
			/>
		</div>
	);
};

export default LinksPage;
