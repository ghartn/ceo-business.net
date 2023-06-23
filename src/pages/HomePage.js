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
import potato from "../img/potato.gif";
import runningMan from "../img/running-man.gif";
import testimonials from "../img/testimonials.gif";
import thumbsUp from "../img/thumbs-up.gif";
import hot from "../img/hot.gif";
import rose from "../img/rose.gif";
import guitar from "../img/guitar.gif";
import smile from "../img/smile.gif";
import rabbit from "../img/rabbit.gif";


class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			buttonClicked: false,
			buttonPosition: {
				top: "90%",
				left: "50%"
			}
		};
	}

	_clickButton = () => {
		window.open("https://get.ceoatbusiness.net/wannabe", "_blank");
		this.setState({
			buttonClicked: !this.state.buttonClicked,
			buttonPosition: {
				top: "75%",
				left: "50%"
			}
		});
	};

	_randomizeButtonPosition = () => {
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
		const isMobile = window.innerWidth <= 640;
		return (
			<div className="pt-16">
				<h1 className="max-w-full overflow-x-hidden text-5xl text-white blink text-center">
					Welcome To The Home Page of
					<img src={logo} alt="logo" className="inline h-10 sm:h-16 ml-2" />
				</h1>
				<div className="pt-16">
					<BouncingText className="text-xl sm:text-3xl md:text-4xl text-red-pure text-center text-glow">
						CEO@BUSINESS.NET - WANNA BE
					</BouncingText>
					<div className="flex justify-center">
						<iframe
							className="mt-6"
							title="ceo@business.net - it doesn't get any better than this"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/z2mNX-CpQe8"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<BouncingText className="mt-6 text-xl sm:text-3xl md:text-4xl text-blue-pure text-center text-glow">
						NEW SONG OUT NOW
					</BouncingText>
				</div>
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
				{buttonClicked && !isMobile ? (
					<div className="relative flex flex-col md:w-2/3 mb-6 justify-center w-auto mt-8 py-2 mx-auto rounded glow bg-yellow-pure texe-center">
						<div className="p-4 flex justify-center overflow-x-hidden">
							<img src={money} alt="money" className="flex-1" />
							<h1 className="px-4 text-4xl font-bold text-green-pure text-glow text-center leading-tight">
								YOU JUST WON $1,000,000 DOLLARS!!!
							</h1>
							<img src={money} alt="money" className="flex-1" />
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
				<div className="w-2/3 mx-auto">
					<ImageRow
						className="mt-6 -mr-2 flex justify-center w-full overflow-x-hidden"
						imgSrc={businessMan}
						imgAlt={"business-man-running"}
						imgClassName={"h-16 md:h-24 flex-1"}
						howMany={9}
						spacing={2}
					/>
				</div>
				<div className="px-2 mt-20 md:mx-0">
					<div className="flex flex-col border glow">
						<div className="relative bg-red-pure py-2 px-3">
							<div className="marquee-bounce-right">
								<h2 className="font-bold text-white text-2xl text-shadow">
									News!
								</h2>
							</div>
							<img
								src={potato}
								alt="potato"
								className="h-16 absolute z-10"
								style={{
									right: 0,
									top: "-1rem"
								}}
							/>
						</div>
						<div className="flex flex-col lg:flex-row bg-gray-300 relative">
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
							<img
								src={runningMan}
								alt="runningMan"
								className="h-16 absolute z-10"
								style={{
									left: 0,
									bottom: 0
								}}
							/>
							<img
								src={runningMan}
								alt="runningMan"
								className="h-16 absolute z-10"
								style={{
									right: 0,
									bottom: 0,
									transform: "scaleX(-1)"
								}}
							/>
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
				<div className="mt-20">
					<div className="px-2 flex justify-center items-center overflow-x-hidden">
						<img
							src={testimonials}
							alt="testimonials"
							className="w-32 md:w-48"
						/>
						<h1
							className="text-xl sm:text-5xl text-center text-white text-glow blink"
							style={{ fontFamily: "'Comic Sans MS', cursive" }}
						>
							<span className="inline-block text-red-pure">T</span>
							<span className="inline-block text-orange-pure">e</span>
							<span className="inline-block text-yellow-pure">S</span>
							<span className="inline-block text-green-pure">T</span>
							<span className="inline-block text-blue-pure">i</span>
							<span className="inline-block text-indigo-pure">M</span>
							<span className="inline-block text-purple-pure">o</span>
							<span className="inline-block text-pink-pure">N</span>
							<span className="inline-block text-red-pure">i</span>
							<span className="inline-block text-orange-pure">A</span>
							<span className="inline-block text-yellow-pure">L</span>
							<span className="inline-block text-green-pure">s</span>
							<span className="inline-block text-blue-pure">!</span>
							<span className="inline-block text-indigo-pure">!</span>
							<span className="inline-block text-purple-pure">!</span>
						</h1>
					</div>
				</div>
				<div className="px-2 mt-6 w-full sm:w-2/3 sm:mx-auto">
					<div className="relative flex flex-col sm:flex-row justify-between bg-blue-pure text-white p-4 border-2 border-white">
						<div className="w-full sm:w-2/3">
							<p className="mb-2 text-xl">
								"Mr. CEO oversaw the company at its toughest time during the
								2008 financial crisis. He laid off thousands of employees
								because I didn't want to talk to them myself."
							</p>
							<i className="text-gray-300">
								- Goldman Sach, CFO of Goldman Sachs (bank)
							</i>
						</div>
						<img src={thumbsUp} alt="thumbs up" className="w-32" />
					</div>
					<div className="mt-6 relative flex flex-col sm:flex-row justify-between bg-yellow-pure text-black p-4 border-2 border-white">
						<img src={rose} alt="rose" className="w-32" />
						<div className="w-full sm:w-2/3">
							<p className="mb-2 text-xl">
								"My old lady is happy. Usually he puts money in a box to take a
								taxi. Be careful."
							</p>
							<i className="text-gray-700">
								- Former Lover (quote translated from Russian)
							</i>
						</div>
						<img
							src={smile}
							alt="smile"
							className="h-8 absolute z-10"
							style={{
								right: 0,
								top: 0
							}}
						/>
					</div>
					<div className="mt-6 relative flex flex-col sm:flex-row justify-between bg-green-pure text-white p-4 border-2 border-white">
						<div className="w-full sm:w-2/3">
							<p className="mb-2 text-xl">
								"This cat knows how to make a dang hit rekkid!"
							</p>
							<i className="text-gray-300">- Disgraced Jazz Legend Roy Donk</i>
						</div>
						<img src={hot} alt="hot" className="w-32" />
						<img
							src={guitar}
							alt="guitar"
							className="h-16 absolute z-10"
							style={{
								right: 0,
								top: "-2rem",
								transform: "rotate(-25deg)"
							}}
						/>
					</div>
					<div className="mt-2 rabbit-run">
						<div>
							<img src={rabbit} alt="rabbit" className="h-16" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
