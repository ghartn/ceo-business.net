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
			<h1 className="text-5xl blink text-center">
				<span className="text-red-pure">THIS PAGE IS MISSING!!!</span>
				<br />
				<span className="text-blue-pure">
					CONTACT THE POLICE FOR MORE INFORMATION!!!
				</span>
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
