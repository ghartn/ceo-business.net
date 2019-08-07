import React from "react";
import errorLight from "../img/error-light.gif";

const NotFoundPage = () => {
	return (
		<div className="pt-12 flex flex-col">
			<div className="flex justify-center">
				<img src={errorLight} alt="error" />
				<img src={errorLight} alt="error" />
				<img src={errorLight} alt="error" />
			</div>
			<h1 className="text-5xl text-red-pure blink text-center">
				THIS PAGE IS MISSING CONTACT THE POLICE FOR MORE INFORMATION!
			</h1>
			<div className="flex justify-center">
				<img src={errorLight} alt="error" />
				<img src={errorLight} alt="error" />
				<img src={errorLight} alt="error" />
			</div>
		</div>
	);
};

export default NotFoundPage;
