module.exports = {
  entities: {
    plants: {
      icon: '&#xe199;',
    },
    products: {
      icon: '&#xe011;',
    },
    posts: {
      icon: '&#xe167;',
    },
  },
  app: {
    title: 'Hedging',
    allowed: true,
    path: '/',
    component: 'Hedging',
    componentPath: 'Hedging/Hedging',
    routes: [
      {
        title: 'Plants',
        path: '/plants',
        query: `query{plants{_id name query keyQuery}}`,
        component: 'HedgePlant',
        componentPath: 'Hedging/HedgePlant',
        keyQuery: 'plants',
        routes: [
          {
            exact: true,
            title: 'Plant Detail',
            keyQuery: 'products',
            path: '/plants/:id',
            component: 'HedgePlantDetail',
            componentPath: 'Hedging/HedgePlantDetail',
          },
        ],
      },
      {
        title: 'Products',
        keyQuery: 'products',
        path: '/products',
        query: '/api/v1/products',
        component: 'HedgeProduct',
        componentPath: 'Hedging/HedgeProduct',
      },
    ],
  },
};
