/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Modal } from 'components/commons/Modal';
import SortMenu from './SortMenu';
import { FilterMenu } from './FilterMenu';
import GroupMenu from './GroupMenu';
import ActionMenuIcons from './ActionMenuIcons';

const Header = styled.header`
  text-align: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.custom.colors.neutral.neutral2};
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ActionMenu = ({
  selectedMenu,
  close,
  onSubmit,
  menus,
  show,
  setMenuSelected,
}) => {
  const { t } = useTranslation();
  const [form, setFormValue] = useState({
    sort: null,
    group: null,
    filter: null,
  });

  const renderMenu = type => {
    switch (type) {
      case 'filter':
        return (
          <FilterMenu action={setFormValue} form={form} menus={menus.filter} />
        );
      case 'group':
        return (
          <GroupMenu action={setFormValue} form={form} menus={menus.group} />
        );
      default:
        return (
          <SortMenu action={setFormValue} form={form} menus={menus.sort} />
        );
    }
  };

  return (
    <Modal
      show={show}
      close={() => close(false)}
      header={<Header>{t('commons.display')}</Header>}
      content={
        <>
          <ActionWrapper>
            <ActionMenuIcons
              menus={menus}
              setMenuSelected={setMenuSelected}
              selectedMenu={selectedMenu}
            />
          </ActionWrapper>
          <Form
            onSubmit={event => {
              event.preventDefault();
              onSubmit(form);
              close(false);
            }}
          >
            {renderMenu(selectedMenu)}
          </Form>
        </>
      }
      footer={{
        cancel: () => close(false),
        submit: () => {
          onSubmit(form);
          close(false);
        },
      }}
    />
  );
};

ActionMenu.propTypes = {
  selectedMenu: PropTypes.string,
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  menus: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  show: PropTypes.bool.isRequired,
  setMenuSelected: PropTypes.func.isRequired,
};

ActionMenu.defaultProps = {
  selectedMenu: null,
};

export default ActionMenu;
