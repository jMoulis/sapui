import {
  CONNECT_SUCCESS,
  SAVE_DATA,
  FETCH_TEXT,
} from './socketActionsConstants';

class SocketActions {
  constructor(socket) {
    this.socket = socket;
  }

  onConnectSuccess = () => {
    this.socket.on(CONNECT_SUCCESS, data => {
      console.log('success');
    });
  };

  saveData = data => {
    this.socket.emit(SAVE_DATA, data, feedback => {
      console.log('Saved Data success', feedback);
    });
  };

  fetchData = (id, callback) => {
    this.socket.emit(FETCH_TEXT, id, data => {
      if (callback) return callback(data);
    });
  };
}

export default SocketActions;
