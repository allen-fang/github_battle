import React from "react";
import Popular from "./Popular.js"
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./Nav.js";

// components: UI, state, lifecycle events

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container ">
					<Nav />
					<Route path="/popular" component={Popular} />
				</div>
			</BrowserRouter>
			
		)
	}
}

module.exports = App;