import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../Redux_Reducers/RootReducer.js';

// const store = createStore(RootReducer, {}, applyMiddleware(thunk, logger));

const store = createStore(RootReducer, {}, compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;