import React from 'react';

const SongList = props => {
	const renderedList = props.songs.map(song => {
		return (
			<div>
				<h3>{song.name}</h3>
				<button onClick={() => props.onSongSelect(song)}>Select Me</button>
			</div>
		);
	});
	return <div>{renderedList}</div>;
};

export default SongList;
