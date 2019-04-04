const ROOT = 'https://services.odata.org/V4/northwind/northwind.svc';

const oDataRouter = {
  categories: request => {
    return `${ROOT}/Categories?${(request && request.replace(/["]+/g, '')) ||
      ''}`;
  },
  category: categoryId => `${ROOT}/Categories(${categoryId})`,
  categoryProducts: categoryId => `${ROOT}/Categories(${categoryId})/Products`,
  config: () => 'http://localhost:3000/api/v1/config',
  plants: () => 'http://localhost:3000/plants.json',
  navigation: url => url,
};

export default oDataRouter;
