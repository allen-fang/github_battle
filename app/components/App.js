import React from "react";
import Popular from "./Popular.js"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Battle from "./Battle.js";
import Results from "./Results.js";

// components: UI, state, lifecycle events

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container ">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/battle" component={Battle} />
						<Route path="/battle/results" component={Results} />
						<Route path="/popular" component={Popular} />
						<Route render={() => {
							return <p>Error 404 - Not Found</p>
						}} />
					</Switch>
				</div>
			</BrowserRouter>
			
		)
	}
}

module.exports = App;