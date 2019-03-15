export default class ApiResponse {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  failure = (error, action) => {
    if (!error.response) return console.error(`AuthApi: ${error.message}`);
    setTimeout(() => {
      this.dispatch(action({ ...error.response.data }));
    }, 1000);
  };

  success = (data, action) => {
    setTimeout(() => {
      this.dispatch(action({ ...data }));
    }, 1000);
  };
}
