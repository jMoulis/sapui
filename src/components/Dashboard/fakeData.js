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

export const tiles = [
  {
    id: 'tile-1',
    position: {
      gridColumn: '1 / 2',
      gridRow: '4',
    },
    component: props => <Chart id="3" type="bar" {...props} />,
  },
  {
    id: 'tile-2',
    position: {
      gridColumn: '2 / 3',
      gridRow: '4',
    },
    component: props => <Chart id="1" type="polarArea" {...props} />,
  },
  {
    id: 'tile-3',
    position: {
      gridColumn: '3 / 4',
      gridRow: '4',
    },
    component: props => <Chart id="4" type="bar" {...props} />,
  },
  {
    id: 'tile-4',
    position: {
      gridColumn: '4 / 5',
      gridRow: '4',
    },
    component: props => <Chart id="4" type="bar" {...props} />,
  },
];

export const gridSize = [
  {
    id: 'default-1',
    name: 'shouldStay',
    position: {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 1,
    },
  },
  {
    id: 'default-2',
    position: {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 1,
    },
  },
  {
    id: 'default-3',
    position: {
      gridColumnStart: 3,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 1,
    },
  },
  {
    id: 'default-4',
    position: {
      gridColumnStart: 4,
      gridColumnEnd: 5,
      gridRowStart: 1,
      gridRowEnd: 1,
    },
  },
  // {
  //   id: 'default-5',
  //   position: {
  //     gridColumnStart: 1,
  //     gridColumnEnd: 2,
  //     gridRowStart: 2,
  //     gridRowEnd: 2,
  //   },
  // },
  // {
  //   id: 'default-6',
  //   position: {
  //     gridColumnStart: 2,
  //     gridColumnEnd: 3,
  //     gridRowStart: 2,
  //     gridRowEnd: 2,
  //   },
  // },
  // {
  //   id: 'default-7',
  //   position: {
  //     gridColumnStart: 3,
  //     gridColumnEnd: 4,
  //     gridRowStart: 2,
  //     gridRowEnd: 2,
  //   },
  // },
  // {
  //   id: 'default-8',
  //   position: {
  //     gridColumnStart: 4,
  //     gridColumnEnd: 5,
  //     gridRowStart: 2,
  //     gridRowEnd: 2,
  //   },
  // },
  // {
  //   id: 'default-9',
  //   position: {
  //     gridColumnStart: 1,
  //     gridColumnEnd: 2,
  //     gridRowStart: 3,
  //     gridRowEnd: 3,
  //   },
  // },
  // {
  //   id: 'default-10',
  //   position: {
  //     gridColumnStart: 2,
  //     gridColumnEnd: 3,
  //     gridRowStart: 3,
  //     gridRowEnd: 3,
  //   },
  // },
  // {
  //   id: 'default-11',
  //   position: {
  //     gridColumnStart: 3,
  //     gridColumnEnd: 4,
  //     gridRowStart: 3,
  //     gridRowEnd: 3,
  //   },
  // },
  // {
  //   id: 'default-12',
  //   position: {
  //     gridColumnStart: 4,
  //     gridColumnEnd: 5,
  //     gridRowStart: 3,
  //     gridRowEnd: 3,
  //   },
  // },
];
