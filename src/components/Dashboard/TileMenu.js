import React from 'react';
import styled from '@emotion/styled';
import { Fade } from 'components/commons/animations';
import { List, ListItem } from 'components/commons/List';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Trash } from 'assets/icons/trash-solid.svg';

const Root = styled(Fade)`
  position: absolute;
  z-index: 1;
  top: 4rem;
  right: 0.5rem;
  width: 20rem;
  min-height: 5rem;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

const Text = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 1.7rem;
  margin: 0.5rem;
`;

const ListItemCustom = styled(ListItem)`
  padding: 1rem;
`;

const TileMenu = ({ inProps, removeItem, item }) => {
  const { t } = useTranslation();
  return (
    <Root data-menu inProps={inProps}>
      <List type="button" onClick={() => removeItem({ source: item })}>
        <ListItem noHover>
          <Title>{t('commons.actionsLists')}</Title>
        </ListItem>
        <ListItemCustom>
          <Trash width="1rem" />
          <Text>{t('commons.delete')}</Text>
        </ListItemCustom>
      </List>
    </Root>
  );
};

export default TileMenu;
