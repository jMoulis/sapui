import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Icon from 'components/commons/Icon';
import { ResetButton, CancelButton } from 'components/commons/Buttons';
import { ButtonGroup } from 'components/commons/Buttons/ButtonGroup';
import SortMenu from './SortMenu';
import FilterMenu from './FilterMenu';
import GroupMenu from './GroupMenu';
import { ButtonEmphasized } from '../commons/Buttons';

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

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background-color: #2f3c48;
`;

const renderMenu = (option, action, form) => {
  switch (option) {
    case 'sort':
      return <SortMenu action={action} form={form} />;
    case 'filter':
      return <FilterMenu action={action} form={form} />;
    case 'group':
      return <GroupMenu action={action} form={form} />;
    default:
      return null;
  }
};

const ActionMenu = ({ option, close, onSubmit }) => {
  const { t } = useTranslation();
  const [selectedOption, setOption] = useState(option);
  const [form, setFormValue] = useState({
    sort: null,
    group: null,
    filter: null,
  });
  return (
    <Root>
      <Header>Title</Header>
      <ActionWrapper>
        <ActionButtonGroup>
          <ResetButton
            type="button"
            title={t('categoryApp.sort')}
            onClick={() => setOption('sort')}
          >
            <IconRadiusCustom>&#xe095;</IconRadiusCustom>
          </ResetButton>
          <ResetButton
            type="button"
            title={t('categoryApp.filter')}
            onClick={() => setOption('filter')}
          >
            <IconRadiusCustom>&#xe076;</IconRadiusCustom>
          </ResetButton>
          <ResetButton
            type="button"
            title={t('categoryApp.group')}
            onClick={() => setOption('group')}
          >
            <IconRadiusCustom>&#xe163;</IconRadiusCustom>
          </ResetButton>
        </ActionButtonGroup>
      </ActionWrapper>
      <Form
        onSubmit={event => {
          event.preventDefault();
          onSubmit(form);
          close(false);
        }}
      >
        <Content>{renderMenu(selectedOption, setFormValue, form)}</Content>
        <Footer>
          <ButtonGroup>
            <ButtonEmphasized type="submit">{t('commons.ok')}</ButtonEmphasized>
            <CancelButton type="button" onClick={() => close(false)}>
              {t('commons.cancel')}
            </CancelButton>
          </ButtonGroup>
        </Footer>
      </Form>
    </Root>
  );
};

ActionMenu.propTypes = {
  option: PropTypes.string,
  close: PropTypes.func.isRequired,
};

ActionMenu.defaultProps = {
  option: null,
};

export default ActionMenu;
