const routes = {
  user: {
    create: data => ({
      method: 'post',
      url: '/api/v1/user',
      data,
    }),
  },
};

export default routes;
