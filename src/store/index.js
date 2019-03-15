import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import mainReducer from 'store/reducers/mainReducer';
import authReducer from 'store/reducers/authReducer';
import userReducer from 'store/reducers/userReducer';

import authApi from 'store/api/authApi';
import userApi from 'store/api/userApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mainReducer,
  authReducer,
  userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(authApi), applyMiddleware(userApi)),
);

export default store;
