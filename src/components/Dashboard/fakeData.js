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
      gridRowEnd: 'span 2',
      gridColumnEnd: 'span 2',
    },
    component: props => <Chart id="4" type="bar" {...props} />,
  },
  {
    id: 'default-2',
    component: props => <Chart id="1" type="polarArea" {...props} />,
  },
  {
    id: 'default-3',
  },
  {
    id: 'default-4',
  },
  {
    id: 'default-5',
  },
  {
    id: 'default-6',
  },
  {
    id: 'default-7',
  },
  {
    id: 'default-8',
  },
  {
    id: 'default-9',
  },
  {
    id: 'default-10',
  },
  {
    id: 'default-11',
  },
  {
    id: 'default-12',
  },
];
