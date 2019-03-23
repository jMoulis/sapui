/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { List, ListItem } from 'components/commons/List';
import { Icon } from 'components/commons/Icons';
import Loader from 'components/commons/Loader/Loader';
import Toolbar from './Toolbar';
import ActionMenu from './ActionMenu';

const Root = styled.div`
  label: CategoriesRoot;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fafafa;
`;

const NavLinkCustom = styled(NavLink)`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconCustom = styled(Icon)`
  color: #bfbfbf;
  font-size: 1rem;
`;

const ListToolbarWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* padding: 0 2rem;
  ${({ theme }) => ({
    [theme.mediaQueries.sm]: {
      padding: 0,
    },
  })} */
`;
const ListCustom = styled(List)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 1px solid #bfbfbf;
  min-height: 5rem;
`;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

const ListToolbarAction = ({
  data,
  keyId,
  keyValue,
  refreshAction,
  isLoading,
  pathToDetail,
  menus,
  callback,
}) => {
  const [actionMenuStatus, setDisplayActionMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleSearchInput = async value => {
    if (!value) {
      refreshAction();
    } else {
      await AwesomeDebouncePromise(
        () => callback(`$filter=${keyValue} eq '${value}'`),
        500,
      )();
    }
  };
  const handleSelectActionMenuOption = queries => {
    const response = Object.values(queries)
      .filter(values => values !== null)
      .join('&');
    callback(response);
  };

  return (
    <Root>
      <ListToolbarWrapper>
        <Toolbar
          refreshAction={refreshAction}
          onSearchChange={handleSearchInput}
          setMenuSelected={setSelectedMenu}
          setDisplayActionMenu={() => setDisplayActionMenu(!actionMenuStatus)}
          menus={menus}
          selectedMenu={selectedMenu}
        />
        <Wrapper>
          <ListCustom>
            {isLoading ? (
              <li>
                <Loader />
              </li>
            ) : (
              data &&
              data.map(item => (
                <ListItem key={item[keyId]}>
                  <NavLinkCustom to={`${pathToDetail}${item[keyId]}`}>
                    {item[keyValue]}
                    <IconCustom>&#xe066;</IconCustom>
                  </NavLinkCustom>
                </ListItem>
              ))
            )}
          </ListCustom>
        </Wrapper>
      </ListToolbarWrapper>
      <ActionMenu
        show={actionMenuStatus}
        selectedMenu={selectedMenu}
        close={() => setDisplayActionMenu(false)}
        onSubmit={handleSelectActionMenuOption}
        setMenuSelected={setSelectedMenu}
        menus={menus}
      />
    </Root>
  );
};

ListToolbarAction.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  keyId: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  refreshAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pathToDetail: PropTypes.string.isRequired,
  menus: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  callback: PropTypes.func,
};

ListToolbarAction.defaultProps = {
  callback: null,
  data: null,
};
export default ListToolbarAction;
