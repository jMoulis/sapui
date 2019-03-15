import axios from 'axios';
import {
  SIGN_IN,
  FETCH_LOGGED_USER,
  EDIT_LOGGED_USER,
  fetchLoggedUserSuccess,
  fetchLoggedUserFailure,
  editLoggedUserSuccess,
  editLoggedUserFailure,
} from 'store/reducers/authReducer';
import ApiResponse from './apiResponse';

export default store => next => action => {
  const Api = new ApiResponse(store.dispatch);

  switch (action.type) {
    case SIGN_IN: {
      const url = '/auth/signin';
      axios({
        method: 'post',
        url,
        data: action.values,
      })
        .then(({ data }) => {
          Api.success(data, fetchLoggedUserSuccess);
          window.sessionStorage.setItem('token', data.token);
        })
        .catch(error => {
          Api.failure(error, fetchLoggedUserFailure);
        });
      break;
    }
    case FETCH_LOGGED_USER: {
      const url = '/auth/logged_user';
      const token = window.sessionStorage.getItem('token');
      axios({
        method: 'get',
        url,
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then(({ data }) => {
          store.dispatch(fetchLoggedUserSuccess(data));
        })
        .catch(error => {
          store.dispatch(fetchLoggedUserFailure({ ...error.response }));
        });
      break;
    }
    case EDIT_LOGGED_USER: {
      const url = `/api/v1/user/${action.payload.userId}`;
      const token = window.sessionStorage.getItem('token');
      axios({
        method: 'patch',
        url,
        data: action.payload.values,
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then(({ data }) => {
          Api.success(data, editLoggedUserSuccess);
        })
        .catch(error => {
          Api.failure(error, editLoggedUserFailure);
        });
      break;
    }
    default:
  }
  next(action);
};
