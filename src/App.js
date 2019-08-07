import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<DefaultLayout path="/" exact component={HomePage} />
			</Switch>
		</Router>
	);
};

export default App;
