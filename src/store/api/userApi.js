import axios from 'axios';
import {
  CREATE_USER,
  createUserSuccess,
  createUserFailure,
} from 'store/reducers/userReducer';
import routes from './routes';
import ApiResponse from './apiResponse';

export default store => next => async action => {
  const Api = new ApiResponse(store.dispatch);
  switch (action.type) {
    case CREATE_USER: {
      try {
        const { data } = await axios(routes.user.create(action.payload));
        Api.success(data, createUserSuccess);
      } catch (error) {
        Api.failure(error, createUserFailure);
      }
      break;
    }
    default:
  }
  next(action);
};
