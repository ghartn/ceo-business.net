import React from "react";
import logo from "../img/logo.png";
import mail from "../img/mail.gif";
import skullMail from "../img/skull-mail.gif";
import ImageRow from "../components/ImageRow";
import point from "../img/point.gif";

const ContactPage = () => {
	return (
		<div className="pt-12">
			<h1 className="max-w-full overflow-x-hidden text-5xl text-white blink text-center">
				CONTACT
				<img src={logo} alt="logo" className="inline h-10 sm:h-16 ml-2" />
			</h1>
			<div className="mt-12 flex justify-center">
				<div className="flex flex-col align-items">
					<a href="mailto:ceo.business.net@gmail.com">
						<img src={mail} alt="mail" className="h-16 md:h-32" />
					</a>
					<a href="mailto:ceo.business.net@gmail.com">
						<img src={mail} alt="mail" className="h-16 md:h-32" />
					</a>
				</div>
				<a href="mailto:ceo.business.net@gmail.com">
					<img src={skullMail} alt="skull mail" className="h-32 md:h-64" />
				</a>
				<a href="mailto:ceo.business.net@gmail.com">
					<img
						src={skullMail}
						alt="skull mail"
						className="h-32 md:h-64"
						style={{ transform: "scaleX(-1)" }}
					/>
				</a>
				<div className="flex flex-col align-items">
					<a href="mailto:ceo.business.net@gmail.com">
						<img src={mail} alt="mail" className="h-16 md:h-32" />
					</a>
					<a href="mailto:ceo.business.net@gmail.com">
						<img src={mail} alt="mail" className="h-16 md:h-32" />
					</a>
				</div>
			</div>
			<ImageRow
				className="mt-6 -mr-2 flex justify-center w-full overflow-x-hidden"
				imgSrc={point}
				imgAlt={"point"}
				imgClassName={"h-12 md:h-20"}
				howMany={12}
				spacing={2}
			/>
		</div>
	);
};

export default ContactPage;
