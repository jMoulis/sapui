import React from 'react';
import styled from '@emotion/styled';
import List from 'components/commons/List';
import ListItem from '../commons/ListItem';
const Root = styled.div``;

const Header = styled.header``;

const GroupMenu = () => {
  return (
    <Root>
      <div>
        <h3>Regrouper par</h3>
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
        <h3>Regrouper objet</h3>
        <List>
          <ListItem>
            <label>
              <input type="checkbox" />
              category id
            </label>
          </ListItem>
          <ListItem>
            <label>
              <input type="checkbox" />
              Néant
            </label>
          </ListItem>
        </List>
      </div>
    </Root>
  );
};

export default GroupMenu;
