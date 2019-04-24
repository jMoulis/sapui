import React from 'react';
import styled from '@emotion/styled';
import { ListItem, List } from 'components/commons/List';

const ListItemCustom = styled(ListItem)`
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const LeftMenu = () => {
  return (
    <List>
      <ListItemCustom>Dashboard</ListItemCustom>
      <ListItemCustom>Analyse</ListItemCustom>
      <ListItemCustom>Admin</ListItemCustom>
    </List>
  );
};

export default LeftMenu;
