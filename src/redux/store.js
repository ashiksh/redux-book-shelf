import { composeWithDevTools } from 'redux-devtools-extension';

const { combineReducers, createStore } = require('redux');
const { default: bookReducer } = require('./reducers/bookReducer');

const combineReducer = combineReducers({
    books: bookReducer,
});

export const store = createStore(combineReducer, composeWithDevTools());
