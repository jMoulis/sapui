import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer from 'store/reducers/mainReducer';
import categoryReducer from 'store/reducers/categoryReducer';
import hedgingReducer from 'components/Hedging/store/reducers/hedgingReducer';
import navigationReducer from 'components/Hedging/store/reducers/navigationReducer';
import plantReducer from 'components/Hedging/store/reducers/plantReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryApi from 'store/api/categoryApi';
import hedgingApi from 'components/Hedging/store/api/hedgingApi';
import navigationApi from 'components/Hedging/store/api/navigationApi';
import plantApi from 'components/Hedging/store/api/plantApi';

const rootReducer = combineReducers({
  mainReducer,
  categoryReducer,
  hedgingReducer,
  navigationReducer,
  plantReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(hedgingApi),
    applyMiddleware(categoryApi),
    applyMiddleware(navigationApi),
    applyMiddleware(plantApi),
  ),
);

export default store;
