import React from 'react';
import Yelp from '../../util/Yelp';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
	const [businesses, setBusinesses] = React.useState([]);

	const searchYelp = (term, location, sortBy) => {
		if (!term || !location || !sortBy) {
			console.log('Missing search parameters. Please try again.');
			return;
		}
		Yelp.search(term, location, sortBy).then((businesses) => {
			setBusinesses(businesses);
		});
	};

	return (
		<div className="App">
			<h1>ravenous</h1>
			<SearchBar searchYelp={searchYelp} />
			<BusinessList businesses={businesses} />
		</div>
	);
}

export default App;
