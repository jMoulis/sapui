import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Icon from 'components/commons/Icon';
import { ResetButton } from 'components/commons/Buttons';
import { ButtonGroup } from 'components/commons/Buttons/ButtonGroup';
import SortMenu from './SortMenu';
import FilterMenu from './FilterMenu';
import GroupMenu from './GroupMenu';
import { ButtonEmphasized } from '../commons/Buttons/Buttons';

const Root = styled.div`
  label: ActionMenuRoot;
  display: flex;
  flex-direction: column;
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

const ActionWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
`;

const ActionButtonGroup = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3rem;
  background-color: #2f3c48;
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
      <Header>Title</Header>
      <ActionWrapper>
        <ActionButtonGroup>
          <ResetButton
            type="button"
            title={t('categoryApp.sort')}
            onClick={() => setAction('sort')}
          >
            <IconRadiusCustom>&#xe095;</IconRadiusCustom>
          </ResetButton>
          <ResetButton
            type="button"
            title={t('categoryApp.filter')}
            onClick={() => setAction('filter')}
          >
            <IconRadiusCustom>&#xe076;</IconRadiusCustom>
          </ResetButton>
          <ResetButton
            type="button"
            title={t('categoryApp.group')}
            onClick={() => setAction('group')}
          >
            <IconRadiusCustom>&#xe163;</IconRadiusCustom>
          </ResetButton>
        </ActionButtonGroup>
      </ActionWrapper>
      <Content>{renderMenu(selectedAction)}</Content>
      <Footer>
        <ButtonGroup>
          <ButtonEmphasized type="button" onClick={() => close(false)}>
            {t('ok')}
          </ButtonEmphasized>
          <ResetButton type="button" onClick={() => close(false)}>
            {t('cancel')}
          </ResetButton>
        </ButtonGroup>
      </Footer>
    </Root>
  );
};

export default ActionMenu;
