import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SearchInput } from 'components/commons/SearchInput';
import ActionMenuIcons from './ActionMenuIcons';

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
        onChange={event => {
          return onSearchChange(event.target.value);
        }}
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
  selectedMenu: PropTypes.string,
};

Toolbar.defaultProps = {
  selectedMenu: null,
};

export default Toolbar;
