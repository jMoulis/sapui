const ROOT = 'https://services.odata.org/V4/northwind/northwind.svc';

const oDataRouter = {
  categories: () => `${ROOT}/Categories`,
  categoriesProducts: categoryId =>
    `${ROOT}/Categories(${categoryId})/Products`,
};

export default oDataRouter;
