import React from 'react';
import { List, ListItem } from 'components/commons/List';
import styled from '@emotion/styled';

const Root = styled(List)`
  grid-area: action;
`;

const ListActions = ({ callback }) => {
  return (
    <Root>
      <ListItem onClick={callback}>app1</ListItem>
      <ListItem onClick={callback}>app2</ListItem>
    </Root>
  );
};
export default ListActions;
