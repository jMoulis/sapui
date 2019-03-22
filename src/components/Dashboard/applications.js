import React from 'react';
import { CategoryDetail } from 'components/Categories/CategoryDetail';
import CategoryApp from '../Categories/CategoryApp';
import Appli2 from '../Appli2/Appli2';
import Appli3 from '../Appli3/Appli3';

const Test3 = () => <span>Test3</span>;

export default [
  {
    path: '/exo',
    title: 'Exercice 1',
    allowed: true,
    component: CategoryApp,
    routes: [
      {
        path: '/exo/:category',
        title: 'Exercice 1',
        allowed: true,
        component: CategoryDetail,
      },
    ],
  },
  {
    path: '/app2',
    title: 'Application 2',
    allowed: true,
    component: Appli2,
    routes: [
      {
        path: '/app2/test',
        title: 'Application 2',
        allowed: true,
        component: Appli3,
      },
      {
        path: '/app2/test2',
        title: 'Application 3',
        allowed: true,
        component: Test3,
      },
    ],
  },
  {
    path: '/app3',
    title: 'Application 3',
    allowed: false,
    component: Appli3,
  },
];
