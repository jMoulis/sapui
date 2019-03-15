export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const RESET_SUCCESS_AND_ERROR = 'RESET_SUCCESS_AND_ERROR';

const initialState = {
  error: null,
  created: false,
  creating: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_USER: {
      return { ...state, creating: true };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        created: true,
        error: null,
        creating: false,
      };
    }
    case CREATE_USER_FAILURE: {
      return {
        ...state,
        created: false,
        creating: false,
        error: { ...action.payload },
      };
    }
    case RESET_SUCCESS_AND_ERROR: {
      return {
        ...state,
        created: false,
        creating: false,
        error: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const createUser = values => ({
  type: CREATE_USER,
  payload: values,
});
export const createUserSuccess = payload => ({
  type: CREATE_USER_SUCCESS,
  payload,
});
export const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const resetSuccessAndError = () => ({
  type: RESET_SUCCESS_AND_ERROR,
});
