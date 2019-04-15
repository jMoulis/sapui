const ROOT = '/api/v1/';

const hedgingApiActions = {
  createPlant: data => ({
    url: `${ROOT}plants`,
    data,
    method: 'POST',
  }),
};

export default hedgingApiActions;
