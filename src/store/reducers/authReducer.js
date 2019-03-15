export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';

export const FETCH_LOGGED_USER = 'FETCH_LOGGED_USER';
export const FETCH_LOGGED_USER_SUCCESS = 'FETCH_LOGGED_USER_SUCCESS';
export const FETCH_LOGGED_USER_FAILURE = 'FETCH_LOGGED_USER_FAILURE';

export const EDIT_LOGGED_USER = 'EDIT_LOGGED_USER';
export const EDIT_LOGGED_USER_SUCCESS = 'EDIT_LOGGED_USER_SUCCESS';
export const EDIT_LOGGED_USER_FAILURE = 'EDIT_LOGGED_USER_FAILURE';

export const RESET_SUCCESS_ERROR = 'RESET_SUCCESS_ERROR';

const initialState = {
  isLogged: false,
  loggedUser: null,
  error: null,
  loading: false,
  success: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, isLogged: false, loading: true };
    }
    case FETCH_LOGGED_USER: {
      return { ...state };
    }
    case FETCH_LOGGED_USER_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        loggedUser: action.payload.user,
        loading: false,
      };
    }
    case FETCH_LOGGED_USER_FAILURE: {
      return {
        ...state,
        isLogged: false,
        error: { ...action.payload },
        loading: false,
      };
    }

    case EDIT_LOGGED_USER: {
      return { ...state, loading: true };
    }

    case EDIT_LOGGED_USER_SUCCESS: {
      return {
        ...state,
        error: null,
        isLogged: true,
        loggedUser: action.payload.user,
        loading: false,
        success: true,
      };
    }
    case EDIT_LOGGED_USER_FAILURE: {
      return {
        ...state,
        error: { ...action.payload },
        loading: false,
        success: false,
      };
    }
    case LOGOUT: {
      window.sessionStorage.removeItem('token');
      return { ...state, isLogged: false, loggedUser: null };
    }
    case RESET_SUCCESS_ERROR: {
      return {
        ...state,
        error: null,
        success: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const signIn = values => ({
  type: SIGN_IN,
  values,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchLoggedUser = () => ({
  type: FETCH_LOGGED_USER,
});
export const fetchLoggedUserSuccess = payload => ({
  type: FETCH_LOGGED_USER_SUCCESS,
  payload,
});
export const fetchLoggedUserFailure = error => ({
  type: FETCH_LOGGED_USER_FAILURE,
  payload: error,
});

export const editLoggedUser = payload => ({
  type: EDIT_LOGGED_USER,
  payload,
});
export const editLoggedUserSuccess = payload => ({
  type: EDIT_LOGGED_USER_SUCCESS,
  payload,
});
export const editLoggedUserFailure = error => ({
  type: EDIT_LOGGED_USER_FAILURE,
  payload: error,
});

export const resetSuccessError = () => ({
  type: RESET_SUCCESS_ERROR,
});
