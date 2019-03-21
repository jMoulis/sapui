const ROOT = 'https://services.odata.org/V4/northwind/northwind.svc';

const oDataRouter = {
  categories: request => {
    return `${ROOT}/Categories?${(request && request.replace(/["]+/g, '')) ||
      ''}`;
  },
  categoryProducts: categoryId => `${ROOT}/Categories(${categoryId})/Products`,
};

export default oDataRouter;
