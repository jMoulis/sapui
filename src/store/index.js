import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
