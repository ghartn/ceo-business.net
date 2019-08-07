import React from "react";
import { Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

const DefaultLayout = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<div className="layout">
					<div className="container flex flex-col min-h-screen py-12 leading-normal ">
						<TopNavigation />
						<div className="flex-1">
							<Component {...matchProps} />
						</div>
						<Footer />
					</div>
				</div>
			)}
		/>
	);
};

export default DefaultLayout;
