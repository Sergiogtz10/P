import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop.jsx";

//VIEWS
import Home from "../views/home.jsx";
import Characters from "../views/Characters/Characters.jsx";
import Planets from "../views/Planets/Planets.jsx";
import Vehicles from "../views/Vehicles/Vehicles.jsx";


//COMPONENTS
import injectContext from "../store/appContext";
import  Navbar  from "../component/Navbar/navbar.jsx";
import  Footer  from "../component/footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Character/info/:id">
							<Characters />
						</Route>
						<Route exact path="/Planets/info/:id">
							<Planets />
						</Route>
						<Route exact path="/Vehicles/info/:id">
							<Vehicles />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
