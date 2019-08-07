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
		<Router>
			<Switch>
				<DefaultLayout path="/" exact component={HomePage} />
				<DefaultLayout path="/music" component={MusicPage} />
				<DefaultLayout path="/about" component={AboutPage} />
				<DefaultLayout path="/tour" component={TourPage} />
				<DefaultLayout path="/links" component={LinksPage} />
				<DefaultLayout path="/contact" component={ContactPage} />
				<DefaultLayout component={NotFoundPage} />
			</Switch>
		</Router>
	);
};

export default App;
