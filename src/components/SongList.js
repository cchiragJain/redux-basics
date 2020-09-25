import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	// this.props will be equal to the songs due to the mapStateToProps function

	renderList = () => {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	};

	render() {
		// console.log(this.props);
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// this function gets called from all the data from the redux store anytime the reducers make changes in the state object
const mapStateToProps = state => {
	// console.log(state);
	// what we are basically doing here is to make this appear as this.props in the songList component when it gets rendered
	return { songs: state.songs };
};

/* connect()() is valid javascript syntax ex.
    function connect(){
      return function(){
        console.log('hello')
      }
    }
    if we want to get the value from the second function we will call it by using 
    connect()();
*/

// we pass in the configuration to the connect function
export default connect(mapStateToProps, { selectSong })(SongList);

// most of the code we have written here for the connect function is boilerplate code
