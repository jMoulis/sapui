import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Icon } from 'components/commons/Icons';
import ActionMenuIcons from './ActionMenuIcons';
import { BtnActions } from '../Buttons';
import { SearchInput } from '../SearchInput';

const Root = styled.div`
  label: Toolbar;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 1rem;
`;

const ActionWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const Toolbar = ({
  refreshAction,
  onSearchChange,
  setDisplayActionMenu,
  setMenuSelected,
  menus,
  selectedMenu,
}) => {
  const { t } = useTranslation();

  return (
    <Root>
      <SearchInput
        onChange={event => onSearchChange(event.target.value)}
        reset={{ onClick: refreshAction }}
        placeholder={t('commons.search')}
      />
      <ActionWrapper>
        <ActionMenuIcons
          menus={menus}
          setMenuSelected={setMenuSelected}
          callback={setDisplayActionMenu}
          selectedMenu={selectedMenu}
        />
      </ActionWrapper>
    </Root>
  );
};

Toolbar.propTypes = {
  refreshAction: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  setDisplayActionMenu: PropTypes.func.isRequired,
  setMenuSelected: PropTypes.func.isRequired,
  menus: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default Toolbar;
