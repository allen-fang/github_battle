var React = require('react');

class Popular extends React.Component {	
	constructor() {
		super(props);
		this.state = {
			selectedLanguage: 'All',
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang
			}
		});
	}
	render() {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']; 
		return(
			<ul className="languages">
				{languages.map((lang) => {
					return (
						<li key={lang}>
							{lang}
						</li>
					)
				})}
			</ul>
		)
	}
}

module.exports = Popular;