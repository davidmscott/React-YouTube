import React, { Component } from 'react';

// // functional component (do not have state)
// const SearchBar = () => {
// 	return <input />
// };

// class-based component (only class-based components have state)
class SearchBar extends Component {
	constructor (props) {
		super(props); // super calls a method that's already defined on the parent class (Component in this case)

		this.state = {term: ''};
	}

	render () {
		return (
			<div className="search-bar">
				<input
				placeholder="Search here..."
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange (term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;