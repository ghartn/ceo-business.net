import React from "react";
import genie from "../img/genie.gif";
import world from "../img/world.gif";
import clickHere from "../img/click-here.gif";
import point from "../img/point.gif";
import BouncingText from "../components/BouncingText";
import businessMan from "../img/business-man-running.gif";
import plane from "../img/plane.gif";
import flymoney from "../img/flymoney.gif";
import coins from "../img/coins.gif";

const HomePage = () => {
	return (
		<div className="pt-16">
			<h1 className="text-5xl text-white blink text-center">
				Welcome To The Home Page of CEO @ Business Dot Net!
			</h1>

			<div className="pt-12 flex items-center">
				<img src={genie} alt="genie" className="w-32" />
				<div className="flex flex-col flex-1 items-center">
					<p className="pr-6 text-lg text-yellow-pure">
						This Page Is The Home Of All News Business! Subscribe To Our
						Newsletter For Constant Emails So You Never Miss A Thing!
					</p>
					<div className="py-4 flex justify-center">
						<div className="relative">
							<img
								src={point}
								alt="point"
								className="absolute h-16 mr-4"
								style={{ transform: "rotate(90deg)", right: "100%" }}
							/>
							<img
								src={point}
								alt="point"
								className="absolute h-16 ml-4"
								style={{ transform: "rotate(270deg) scaleX(-1)", left: "100%" }}
							/>
							<a href="/" className="block">
								<img src={clickHere} alt="click here" className="h-16" />
							</a>
						</div>
					</div>
				</div>
				<img src={world} alt="world" className="w-32" />
			</div>
			<div className="pt-16">
				<BouncingText className="text-3xl text-red-pure text-center">
					CEO@BUSINESS.NET
				</BouncingText>
				<div className="mt-6 flex justify-center">
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
				<BouncingText className="mt-6 text-3xl text-blue-pure text-center">
					Incentivize Unpaid Overtime
				</BouncingText>
			</div>
			<div className="mt-20">
				<div className="flex flex-col border glow">
					<div className="bg-red-pure py-2 px-3">
						<div className="marquee-bounce-right">
							<h2 className="font-bold text-white text-2xl text-shadow">
								News!
							</h2>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row bg-gray-300">
						<div className="m-4 flex flex-col flex-1 bg-gray-200">
							<div className="flex items-center h-16 p-2 inset-shadow bg-gray-400 border-gray-600 border-l border-r">
								<h3 className="font-bold">Company Jet Has Doubled In Size</h3>
							</div>
							<div className="p-4 flex flex-1 justify-between items-center border border-gray-600 border-t-0">
								<p className="w-4/5">
									Our business is booming and profits are skyrocketing, thanks
									to your hard work! Keep it up!
								</p>
								<img src={plane} alt="plane" className="h-16" />
							</div>
						</div>
						<div className="m-4 flex flex-col flex-1 bg-gray-200">
							<div className="flex items-center h-16 p-2 inset-shadow bg-gray-400 border-gray-600 border-l border-r">
								<h3 className="font-bold">
									Foreign Associates Have Aggressively Agreed Upon Expansion
								</h3>
							</div>
							<div className="p-4 flex flex-1 justify-between items-center border border-gray-600 border-t-0">
								<p className="w-4/5">
									Our business partners have agreed to outsource our labour
									saving us millions! Free trade allows us to aggressively cut
									costs! It is a huge win!
								</p>
								<img src={flymoney} alt="flymoney" className="h-16" />
							</div>
						</div>
						<div className="m-4 flex flex-col flex-1 bg-gray-200">
							<div className="flex items-center h-16 p-2 inset-shadow bg-gray-400 border-gray-600 border-l border-r">
								<h3 className="font-bold">Business Is Booming! BOOM</h3>
							</div>
							<div className="p-4 flex flex-1 justify-between items-center border border-gray-600 border-t-0">
								<p className="w-4/5">
									BOOM BOOM BOOM BOOM BOOM BOOM BOOM BOOM BOOM BOOM BOOM BOOM
									BOOM!
								</p>
								<img src={coins} alt="coins" className="h-16" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
