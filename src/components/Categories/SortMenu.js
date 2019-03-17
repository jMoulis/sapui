import React, { useState } from 'react';
import styled from '@emotion/styled';
import ListItem from '../commons/ListItem';
import List from '../commons/List';

const Root = styled.div``;

const Header = styled.header``;

const SortMenu = ({ action, form }) => {
  return (
    <Root>
      <div>
        <h3>Trier par</h3>
        <List>
          <ListItem>
            <label>
              <input
                name="order"
                type="radio"
                value="ASC"
                onChange={() =>
                  action({ ...form, sort: { ...form.sort, order: 'ASC' } })
                }
              />
              Ordre croissant
            </label>
          </ListItem>
          <ListItem>
            <label>
              <input
                name="order"
                type="radio"
                value="DESC"
                onChange={() =>
                  action({ ...form, sort: { ...form.sort, order: 'DESC' } })
                }
              />
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
              <input
                name="type"
                type="radio"
                value="CategoryName"
                onChange={() =>
                  action({
                    ...form,
                    sort: {
                      ...form.sort,
                      object: 'CategoryName',
                    },
                  })
                }
              />
              Trier par category nom
            </label>
          </ListItem>
          <ListItem>
            <label>
              <input
                name="type"
                type="radio"
                value="CategoryId"
                onChange={() =>
                  action({
                    ...form,
                    sort: {
                      ...form.sort,
                      object: 'CategoryID',
                    },
                  })
                }
              />
              Trier par category id
            </label>
          </ListItem>
        </List>
      </div>
    </Root>
  );
};

export default SortMenu;
