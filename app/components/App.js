 var React = require('react');
var Popular = require('./Popular');

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