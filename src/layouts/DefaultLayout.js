import React from "react";
import { Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

const DefaultLayout = ({ component: Component, path, ...rest }) => {
	return (
		<Route
			{...rest}
			path={path}
			render={matchProps => (
				<div className="layout">
					<div className="container flex flex-col min-h-screen leading-normal ">
						<TopNavigation path={path} />
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
