import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

// we are making a functional component here since the state will be managed in redux now.
const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					{/* notice how we are not passing in any data to the components in the app.js file as all of that is managed through redux now */}
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
