import React, { useState } from 'react';
import styled from '@emotion/styled';
import Icon from 'components/commons/Icon';
import { useTranslation } from 'react-i18next';
import SortMenu from './SortMenu';
import FilterMenu from './FilterMenu';
import GroupMenu from './GroupMenu';

const Root = styled.div`
  background-color: white;
  width: 35rem;
  min-height: 40rem;
  border-radius: 3px;
`;

const Header = styled.header`
  text-align: center;
  padding: 1rem;
`;

const IconCustom = styled(Icon)`
  font-size: 1.5rem;
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 0;
  color: #346187;
`;

const IconRadiusCustom = styled(IconCustom)`
  border-radius: 2px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;

const ActionWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
`;

const ButtonGroup = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const renderMenu = action => {
  switch (action) {
    case 'sort':
      return <SortMenu />;
    case 'filter':
      return <FilterMenu />;
    case 'group':
      return <GroupMenu />;
    default:
      return null;
  }
};
const ActionMenu = ({ action, close }) => {
  const { t } = useTranslation();
  const [selectedAction, setAction] = useState(action);
  return (
    <Root>
      <Header>
        Title
        <button type="button" onClick={() => close(false)}>
          Close
        </button>
      </Header>
      <ActionWrapper>
        <ButtonGroup>
          <Button
            type="button"
            title={t('categoryApp.sort')}
            onClick={() => setAction('sort')}
          >
            <IconRadiusCustom>&#xe095;</IconRadiusCustom>
          </Button>
          <Button
            type="button"
            title={t('categoryApp.filter')}
            onClick={() => setAction('filter')}
          >
            <IconRadiusCustom>&#xe076;</IconRadiusCustom>
          </Button>
          <Button
            type="button"
            title={t('categoryApp.group')}
            onClick={() => setAction('group')}
          >
            <IconRadiusCustom>&#xe163;</IconRadiusCustom>
          </Button>
        </ButtonGroup>
      </ActionWrapper>
      {renderMenu(selectedAction)}
    </Root>
  );
};

export default ActionMenu;
