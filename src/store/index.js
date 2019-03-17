import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import mainReducer from 'store/reducers/mainReducer';
import categoryReducer from 'store/reducers/categoryReducer';

import categoryApi from 'store/api/categoryApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mainReducer,
  categoryReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(categoryApi)),
);

export default store;
