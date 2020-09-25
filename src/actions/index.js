// we have named the file index.js as well due to React conventions and also since it is a root file

// Action Creator
export const selectSong = song => {
	// return an action
	return {
		// the type is required ,payload is not required but generally needed.
		type: 'SONG_SELECTED',
		payload: song,
	};
};
