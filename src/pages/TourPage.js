import React from "react";
import tour from "../img/tour.jpg";
//import UnderConstruction from "../components/UnderConstruction";

const TourPage = () => {
	return (
		<div className="pt-12">
			<div>
				<a href="https://bbnomula.com/tour">
					<img src={tour} alt="tour poster" className="w-2/3 mx-auto" />
				</a>
			</div>
		</div>
	);
};

export default TourPage;
