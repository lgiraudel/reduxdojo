import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';

var store = createStore(reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
);
