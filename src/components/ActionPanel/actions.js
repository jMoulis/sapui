import React from 'react';
import PlantForm from 'components/Forms/PlantForm';
import ProductForm from 'components/Forms/ProductForm';
import PostForm from 'components/Forms/PostForm';
import { Message } from 'components/Message';
import { Task } from 'components/Task';
import { Config } from 'components/Config';

export default {
  newPlant: {
    label: 'New Plant',
    icon: 'industry',
    component: () => {
      return <PlantForm />;
    },
  },
  newProduct: {
    label: 'New Product',
    icon: 'product',
    component: () => {
      return <ProductForm />;
    },
  },
  newPost: {
    label: 'New Post',
    icon: 'quote',
    component: () => {
      return <PostForm />;
    },
  },
  message: {
    label: 'New Message',
    icon: 'message',
    isNotif: true,
    component: () => {
      return <Message />;
    },
  },
  task: {
    label: 'New Task',
    icon: 'task',
    isNotif: true,
    component: () => {
      return <Task />;
    },
  },
  newShortCut: {
    label: 'Add shortcut',
    icon: 'add',
    component: () => {
      return <Config />;
    },
  },
};
