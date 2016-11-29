import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.js';
import VideoList from './components/video-list.js';
import VideoDetail from './components/video-detail.js';
const API_KEY = 'AIzaSyATkpEirOr-WlyMFkemo-e8ND1lPrNcAaU';

// class component: have state, this.props always available, whenever state is changed component and all children components automatically re-render
// functional component: no state, props available if passed as a parameter

// create a new component. This component should produce some html.

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('best backpacking trips');

	}

	videoSearch (term) {
		YTSearch({key: API_KEY, term}, (videos) => {this.setState({
			videos,
			selectedVideo: videos[0]
		})});
	}

	render () {
		const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				/>
			</div>
		);
	}
};

// Take this component's generated html and put it on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));