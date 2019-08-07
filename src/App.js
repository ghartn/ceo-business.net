import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Layouts
import DefaultLayout from "./layouts/DefaultLayout";

//Page Imports
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage";
import AboutPage from "./pages/AboutPage";
import TourPage from "./pages/TourPage";
import LinksPage from "./pages/LinksPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<DefaultLayout path="/" exact component={HomePage} />
				<DefaultLayout path="/music" exact component={MusicPage} />
				<DefaultLayout path="/about" exact component={AboutPage} />
				<DefaultLayout path="/tour" exact component={TourPage} />
				<DefaultLayout path="/links" exact component={LinksPage} />
				<DefaultLayout path="/contact" exact component={ContactPage} />
				<DefaultLayout component={NotFoundPage} />
			</Switch>
		</Router>
	);
};

export default App;
