import React from "react";
import Popular from "./Popular.js"

// components: UI, state, lifecycle events

class App extends React.Component {
	render() {
		return (
			<div className="container ">
				<Popular />
			</div>
		)
	}
}

module.exports = App;