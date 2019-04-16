import { createStore, combineReducers, applyMiddleware } from 'redux';
import hedgingReducer from 'store/reducers/hedgingReducer';
import navigationReducer from 'store/reducers/navigationReducer';
import plantReducer from 'store/reducers/plantReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import hedgingApi from 'store/api/hedgingApi';
import navigationApi from 'store/api/navigationApi';
import plantApi from 'store/api/plantApi';

const rootReducer = combineReducers({
  hedgingReducer,
  navigationReducer,
  plantReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(hedgingApi),
    applyMiddleware(navigationApi),
    applyMiddleware(plantApi),
  ),
);

export default store;
