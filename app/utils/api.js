import Axios from "axios";


// USE IF GETTING RATE LIMITED BY GITHUB API
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getProfile(username) {
	return Axios.get("https://api.github.com/users/" + username)
		.then((user) => {
			return user.data;
		});
}

function getRepos(username) {
	return Axios.get("https://api.github.com/users/" + username + "/repos" + "&per_page=100")
}

function getStarCount(repos) {
	return repos.data.reduce(function(count, repo) {
		return count + repo.stargazers_count;
	}, 0);
}

function calculateScore(profile, repos) {
	var followers = profile.followers;
	var totalStars = getStarCount(repos);
	
	return (followers * 3) + totalStars;
}

function handleError(error) {
	console.warn(error);
	return null;
}

function getUserData(player) {
	return Axios.all([
			getProfile(player),
			getRepos(player)
		]).then((data) => {
			var profile = data[0];
			var repos = data[1];

			return {
				profile: profile,
				score: calculateScore(profile, repos)
			}
		});
}

function sortPlayers(players){
	return players.sort(function(a,b) {
		return b.score - a.score;
	})
}

export default function battle(players) {
	return Axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch(handleError)
}

export default function fetchPopularRepos(language) {
	var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
	// will return a promise
	return Axios.get(encodedURI)
		.then((response) => {
			return response.data.items;
		})
}


