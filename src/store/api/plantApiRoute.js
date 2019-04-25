const ROOT = '/api/v1/';

const hedgingApiActions = {
  createPlant: data => {
    return {
      url: `${ROOT}plants`,
      data,
      method: 'POST',
    };
  },
};

export default hedgingApiActions;
