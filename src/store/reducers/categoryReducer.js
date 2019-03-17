const initialState = {
  error: null,
  created: false,
  creating: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
