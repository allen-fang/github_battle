import React from "react";
import PropTypes from "prop-types";
import fetchPopularRepos from '../utils/api.js';

function SelectLanguage(props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']; 
	return(
		<ul className="languages">
			{languages.map((lang) => {
				return (
					<li 
						style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
						onClick={props.onSelect.bind(null, lang)}
						key={lang}
					>
						{lang}
					</li>
				)
			})}
		</ul>
	)
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}
	componentDidMount(){
		// AJAX
		fetchPopularRepos(this.state.selectedLanguage)
			.then((repos) => {
				console.log(repos);
			})
	}
	updateLanguage(lang) {
		this.setState({
			selectedLanguage: lang
		});
	}
	render() {
		return(
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		)
	}
}

export default Popular;