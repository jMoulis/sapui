module.exports = {
  entities: {
    plants: {
      label: 'plants',
      entity: 'Plants',
      displayField: 'Name',
      uri: '/api/v1/plants',
      initMenu: true,
    },
    products: {
      label: 'products',
      entity: 'Products',
      displayField: 'Name',
      uri: '/api/v1/products',
      initMenu: true,
    },
    posts: {
      label: 'posts',
      entity: 'Posts',
      displayField: 'OrderID',
      uri: '/api/v1/posts',
    },
  },
  router: {
    hedging: {
      title: 'Hedging',
      allowed: true,
      path: '/hedging',
      component: 'Hedging',
      componentPath: 'Hedging/Hedging',
      routes: [
        {
          title: 'Plants',
          path: '/hedging/plants',
          uri: '/api/v1/plants',
          component: 'HedgeContent',
          componentPath: 'Hedging/HedgeContent',
          routes: [
            {
              title: 'Plants',
              path: '/:id',
              component: 'HedgeContent',
              componentPath: 'Hedging/HedgeContent',
            },
          ],
        },
        {
          title: 'Products',
          path: '/hedging/products',
          uri: '/api/v1/products',
          component: 'HedgeContent',
          componentPath: 'Hedging/HedgeContent',
        },
      ],
    },
    category: {
      title: 'Exo 1',
      allowed: true,
      path: '/category',
      component: 'Categories',
      componentPath: 'Categories/Category',
      routes: [
        {
          path: '/:category',
          title: 'Exercice 1',
          allowed: true,
          component: 'CategoryDetail',
          componentPath: 'Categories/CategoryDetail/CategoryDetail',
        },
      ],
    },
    app3: {
      title: 'App 3',
      allowed: false,
      exact: true,
      path: '/app3',
      component: 'Appli3',
      routes: [],
    },
  },
  initNavMenu: ['plants', 'products'],
};
