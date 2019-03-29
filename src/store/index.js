import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import mainReducer from 'store/reducers/mainReducer';
import categoryReducer from 'store/reducers/categoryReducer';
import hedgingReducer from 'components/Hedging/store/reducers/hedgingReducer';
import navigationReducer from 'components/Hedging/store/reducers/navigationReducer';

import categoryApi from 'store/api/categoryApi';
import hedgingApi from 'components/Hedging/store/api/hedgingApi';
import navigationApi from 'components/Hedging/store/api/navigationApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mainReducer,
  categoryReducer,
  hedgingReducer,
  navigationReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(categoryApi),
    applyMiddleware(hedgingApi),
    applyMiddleware(navigationApi),
  ),
);

export default store;
