import React from 'react';

const SongDetail = ({ selectedSong }) => {
	return (
		<div>
			<h2>{selectedSong.name}</h2>
			<h3>{selectedSong.duration}</h3>
		</div>
	);
};

export default SongDetail;
