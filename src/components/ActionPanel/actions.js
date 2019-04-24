import React from 'react';
import PlantForm from 'components/Forms/PlantForm';
import ProductForm from 'components/Forms/ProductForm';
import PostForm from 'components/Forms/PostForm';

export default {
  newPlant: {
    label: 'New Plant',
    icon: '&#xe199;',
    component: () => {
      return <PlantForm />;
    },
  },
  newProduct: {
    label: 'New Product',
    icon: '&#xe011;',
    component: () => {
      return <ProductForm />;
    },
  },
  newPost: {
    label: 'New Post',
    icon: '&#xe167;',
    component: () => {
      return <PostForm />;
    },
  },
};
