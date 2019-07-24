import React from 'react';
import { Chart } from './Chart';

export const cards = [
  {
    title: 'Ventes',
    icon: 'income',
    color: '#fb4f4f',
    to: '/sales',
    position: {
      gridRow: '1',
      gridColumn: '1 / 2',
    },
    id: 'card-1',
  },
  {
    title: 'Commandes',
    icon: 'order',
    color: '#33cccc',
    to: '/orders',
    position: {
      gridRow: '1',
      gridColumn: '2 / 3',
    },
    id: 'card-2',
  },
  {
    title: 'Factures',
    icon: 'quote',
    color: '#d8b2d8',
    to: '/billings',
    position: {
      gridRow: '1',
      gridColumn: '3 / 4',
    },
    id: 'card-3',
  },
  {
    title: 'Produits',
    icon: 'product',
    color: '#33eee0',
    to: '/products',
    position: {
      gridRow: '1',
      gridColumn: '4 / 5',
    },
    id: 'card-4',
  },
];

export const widgets = {
  Chart: props => <Chart id="3" type="bar" {...props} />,
  Message: props => <h1 {...props}>TestMessage</h1>,
};

export const tiles = [
  {
    id: 'tile-1',
    position: {
      gridRowEnd: 1,
      gridColumnEnd: 1,
    },
    component: {
      name: 'Chart',
      props: {
        id: '1',
        type: 'bar',
      },
    },
  },
  {
    id: 'tile-2',
    position: {
      gridRowEnd: 1,
      gridColumnEnd: 1,
    },
    component: {
      name: 'Message',
      props: {},
    },
  },
  {
    id: 'tile-4',
    position: {
      gridRowEnd: 1,
      gridColumnEnd: 1,
    },
    component: {
      name: 'Chart',
      props: {
        id: '5',
        type: 'polarArea',
      },
    },
  },
];

export const gridSize = [
  {
    id: 'default-1',
    position: {
      gridRowEnd: 2,
      gridColumnEnd: 2,
    },
    component: {
      name: 'Chart',
      props: {
        id: '4',
        type: 'bar',
      },
    },
  },
  {
    id: 'default-2',
    position: {
      gridRowEnd: 1,
      gridColumnEnd: 1,
    },
    component: {
      name: 'Chart',
      props: {
        id: '1',
        type: 'polarArea',
      },
    },
  },
  // {
  //   id: 'default-3',
  // },
  // {
  //   id: 'default-4',
  // },
  // {
  //   id: 'default-5',
  // },
  // {
  //   id: 'default-6',
  // },
  // {
  //   id: 'default-7',
  // },
  // {
  //   id: 'default-8',
  // },
  // {
  //   id: 'default-9',
  // },
  // {
  //   id: 'default-10',
  // },
  // {
  //   id: 'default-11',
  // },
  // {
  //   id: 'default-12',
  // },
];
