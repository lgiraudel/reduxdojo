import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import createLogger from 'redux-logger';
import { compose, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();
var createStoreWithMiddleware = compose(
    applyMiddleware(loggerMiddleware)
)(createStore);

var store = createStoreWithMiddleware(reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
);
