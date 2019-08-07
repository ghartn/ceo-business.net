import React from "react";
import genie from "../img/genie.gif";
import world1 from "../img/world1.gif";
import BouncingText from "../components/BouncingText";
import businessMan from "../img/business-man-running.gif";

const HomePage = () => {
	return (
		<div className="pt-8">
			<h1 className="text-5xl text-white blink text-center">
				Welcome To The Home Page of CEO @ Business Dot Net!
			</h1>

			<div className="flex items-center">
				<img src={genie} alt="genie" />
				<p className="my-6 pr-6 text-lg text-yellow-pure">
					This Page Is The Home Of All News Business! Subscribe To Our
					Newsletter For Constant Emails So You Never Miss A Thing!
				</p>
				<img src={world1} alt="world" />
			</div>

			<BouncingText className="mt-6 text-3xl text-red-pure text-center">
				Incentivize Unpaid Overtime
			</BouncingText>
			<div className="mt-8 flex justify-center">
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img
					src={businessMan}
					alt="business-man-running"
					className="h-24 mr-2"
				/>
				<img src={businessMan} alt="business-man-running" className="h-24" />
			</div>
		</div>
	);
};

export default HomePage;
