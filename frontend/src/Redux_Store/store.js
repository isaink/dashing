import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import RootReducer from '../Redux_Reducers/RootReducer.js'

const store = createStore(RootReducer, {}, applyMiddleware(thunk, logger))

export default store;