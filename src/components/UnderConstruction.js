import React from "react";
import underConstruction from "../img/under-construction.gif";
import underConstruction2 from "../img/under-construction2.gif";
import underConstruction3 from "../img/under-construction3.gif";

const UnderConstruction = () => {
	return (
		<div className="mx-4 md:mx-0 flex flex-col">
			<div className="my-8 flex justify-center items-center text-center">
				<img
					src={underConstruction2}
					alt="under construction"
					className="h-16 md:h-32"
				/>
				<h2 className="text-3xl text-white">Sorry This Page Is</h2>
				<img
					src={underConstruction2}
					alt="under construction"
					className="h-16 md:h-32"
				/>
			</div>
			<div className="flex justify-center">
				<img src={underConstruction} alt="under construction" />
			</div>
			<div className="my-8 flex justify-center items-center text-center">
				<img
					src={underConstruction3}
					alt="under construction"
					className="h-16 md:h-32"
				/>
				<h2 className="text-3xl text-white">Under Constrcution</h2>
				<img
					src={underConstruction3}
					alt="under construction"
					className="h-16 md:h-32"
				/>
			</div>
		</div>
	);
};

export default UnderConstruction;
