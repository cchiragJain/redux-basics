import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// we are making a functional component here since the state will be managed in redux now
class App extends React.Component {
	state = {
		songs: [
			{
				name: 'a',
				duration: 1,
			},
			{
				name: 'b',
				duration: 2,
			},
			{
				name: 'c',
				duration: 3,
			},
		],
		selectedSong: '',
	};

	onSongSelect = selectedSong => {
		this.setState({
			selectedSong: selectedSong,
		});
	};

	render() {
		return (
			<div>
				<SongList songs={this.state.songs} onSongSelect={this.onSongSelect} />
				<SongDetail selectedSong={this.state.selectedSong} />
			</div>
		);
	}
}

export default App;
