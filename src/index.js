import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// notice how we seperate the imports that are from other files from the ones that we provide
import App from './components/App';
import reducers from './reducers';

// wrapping the app in the provider component and to pass in the store to that
ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
