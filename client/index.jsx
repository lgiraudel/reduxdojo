import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import createLogger from 'redux-logger';
import { compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const loggerMiddleware = createLogger();
var createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    devTools()
)(createStore);

var store = createStoreWithMiddleware(reducers);

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        <DebugPanel right top bottom>
            <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
    </div>
    ,
    document.getElementById('react-container')
);
