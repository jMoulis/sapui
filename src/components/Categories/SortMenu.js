import React from 'react';
import styled from '@emotion/styled';
import ListItem from '../commons/ListItem';
import List from '../commons/List';

const Root = styled.div``;

const Header = styled.header``;

const SortMenu = () => {
  return (
    <Root>
      <div>
        <h3>Trier par</h3>
        <List>
          <ListItem>
            <label>
              <input type="checkbox" />
              Ordre croissant
            </label>
          </ListItem>
          <ListItem>
            <label>
              <input type="checkbox" />
              Ordre décroissant
            </label>
          </ListItem>
        </List>
      </div>
      <div>
        <h3>Trier objet</h3>
        <List>
          <ListItem>
            <label>
              <input type="checkbox" />
              Trier par category nom
            </label>
          </ListItem>
          <ListItem>
            <label>
              <input type="checkbox" />
              Trier par category id
            </label>
          </ListItem>
        </List>
      </div>
    </Root>
  );
};

export default SortMenu;
