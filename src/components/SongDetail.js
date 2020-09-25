import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
	if (!selectedSong) return <div>select a song</div>;

	return (
		<div>
			<div>{selectedSong.title}</div>
			<div>{selectedSong.duration}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		selectedSong: state.selectedSong,
	};
};

export default connect(mapStateToProps)(SongDetail);
