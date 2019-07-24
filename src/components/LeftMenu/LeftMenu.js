import React from 'react';
import { List } from 'components/commons/List';

import MenuListItem from './MenuListItem';

const LeftMenu = ({ collapsed, toggle, close }) => {
  return (
    <List>
      <MenuListItem
        to="/"
        icon="dashboard"
        label="Dashboard"
        callback={() => {
          if (collapsed) return toggle();
          return null;
        }}
        close={close}
        collapsed={collapsed}
      />
    </List>
  );
};

export default LeftMenu;
