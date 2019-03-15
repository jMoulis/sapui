import React from 'react';
import styled from '@emotion/styled';
import List from '../commons/List';
import ListItem from '../commons/ListItem';

const Root = styled.div``;

const Header = styled.header``;

const FilterMenu = () => {
  return (
    <Root>
      <div>
        <h3>Filtrer par</h3>
        <List>
          <ListItem>
            <span>Id Category</span>
          </ListItem>
        </List>
      </div>
    </Root>
  );
};

export default FilterMenu;
