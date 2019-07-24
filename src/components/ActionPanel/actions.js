import React from 'react';
import { Message } from 'components/Message';
import { Task } from 'components/Task';

export default {
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
};
