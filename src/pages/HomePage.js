import React, { Component } from "react";
import logo from "../img/logo.png";
import genie from "../img/genie.gif";
import world from "../img/world.gif";
import clickHere from "../img/click-here.gif";
import money from "../img/money.gif";
import point from "../img/point.gif";
import BouncingText from "../components/BouncingText";
import businessMan from "../img/business-man-running.gif";
import plane from "../img/plane.gif";
import flymoney from "../img/flymoney.gif";
import coins from "../img/coins.gif";
import ImageRow from "../components/ImageRow";
import dollar from "../img/dollar.gif";
class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			buttonClicked: false,
			buttonPosition: {
				top: "75%",
				left: "50%"
			}
		};
	}

	_clickButton = () => {
		this.setState({
			buttonClicked: !this.state.buttonClicked,
			buttonPosition: {
				top: "75%",
				left: "50%"
			}
		});
	};

	_randomizeButtonPosition = () => {
		console.log(window);
		this.setState({
			buttonPosition: {
				top: Math.random() * 300,
				left: Math.random() * 300
			}
		});
	};

	render() {
		const { buttonClicked, buttonPosition } = this.state;
		const { top, left } = buttonPosition;
		return (
			<div className="pt-16">
				<h1 className="max-w-full overflow-x-hidden text-5xl text-white blink text-center">
					Welcome To The Home Page of
					<img src={logo} alt="logo" className="inline h-10 sm:h-16 ml-2" />
				</h1>

				<div className="pt-12 flex items-center">
					<img src={genie} alt="genie" className="w-16 md:w-32" />
					<div className="flex flex-col flex-1 items-center">
						<p className="pr-6 text-lg text-yellow-pure text-center">
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
									style={{
										transform: "rotate(270deg) scaleX(-1)",
										left: "100%"
									}}
								/>
								<button
									className="block focus:outline-none hover:glow"
									onClick={this._clickButton}
								>
									<img src={clickHere} alt="click here" className="w-32" />
								</button>
							</div>
						</div>
					</div>
					<img src={world} alt="world" className="w-16 md:w-32" />
				</div>
				{buttonClicked ? (
					<div className="relative flex flex-col md:w-2/3 justify-center w-auto mt-8 py-2 mx-auto rounded glow bg-yellow-pure texe-center">
						<div className="p-4 flex justify-center w-auto">
							<img src={money} alt="money" />
							<h1 className="px-4 text-4xl font-bold text-green-pure text-glow text-center">
								YOU JUST WON $1,000,000 DOLLARS!!!
							</h1>
							<img src={money} alt="money" />
						</div>
						<div>
							<button
								className="absolute z-50 w-64 -ml-32 my-2 px-4 py-2 inset-shadow bg-green-pure text-white border-green-600 border-2 rounded glow"
								onMouseOver={this._randomizeButtonPosition}
								onMouseEnter={this._randomizeButtonPosition}
								onMouseMove={this._randomizeButtonPosition}
								style={{ top: top, left: left }}
							>
								CLICK HERE TO CLAIM YOUR PRIZE!
							</button>
						</div>
					</div>
				) : null}
				<div className="pt-16">
					<BouncingText className="text-xl sm:text-3xl md:text-4xl text-red-pure text-center text-glow">
						ceo@business.net
					</BouncingText>
					<ImageRow
						className="mt-6 -mr-2 flex justify-center w-full overflow-x-hidden"
						imgSrc={businessMan}
						imgAlt={"business-man-running"}
						imgClassName={"h-16 md:h-24"}
						howMany={9}
						spacing={2}
					/>
					<BouncingText className="mt-6 text-xl sm:text-3xl md:text-4xl text-blue-pure text-center text-glow">
						Incentivize Unpaid Overtime
					</BouncingText>
				</div>
				<div className="mx-2 mt-20 md:mx-0">
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
									<img src={plane} alt="plane" className="h-8 md:h-16" />
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
									<img src={flymoney} alt="flymoney" className="h-8 md:h-16" />
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
									<img src={coins} alt="coins" className="h-8 md:h-16" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<ImageRow
					className="mt-8 -mr-2 flex justify-center w-full overflow-x-hidden"
					imgSrc={dollar}
					imgAlt={"spinning dollar sign"}
					imgClassName={"h-12 md:h-16"}
					howMany={12}
					spacing={2}
				/>
			</div>
		);
	}
}

export default HomePage;
