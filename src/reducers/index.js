import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'a', duration: '1:25' },
		{ title: 'b', duration: '2:25' },
		{ title: 'c', duration: '3:25' },
		{ title: 'd', duration: '4:25' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	// we don't need to check for this condition in this case since we only have one action but that is how we usually do it
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

// the keys are what gets stored in the state object
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
