/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from 'components/commons/List';
import { Icon } from 'components/commons/Icons';
import Modal from 'components/commons/Modal';
import Helpers from 'services/Helpers';
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

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #eff4f9;
  height: 4.8rem;
  box-shadow: 0 0.125rem 0 0 #eff4f9, inset 0 -0.125rem 0 0 #d1e0ee;
  padding-left: 3rem;
  margin-bottom: 3rem;
`;

const ListToolbarWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  ${({ theme }) => ({
    [theme.mediaQueries.sm]: {
      padding: 0,
    },
  })}
`;
const ListCustom = styled(List)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 1px solid #bfbfbf;
`;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

const ListToolbarAction = ({
  data,
  keyId,
  keyValue,
  title,
  refreshAction,
  isLoading,
  pathToDetail,
  actionMenuOptions,
}) => {
  const helpers = new Helpers();
  const [filteredData, setFilteredData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState(null);
  const [actionMenuStatus, setDisplayActionMenu] = useState(false);
  const [selectedActionType, setActionType] = useState(null);

  const handleSelectActionMenuOption = ({ sort, group, filter }) => {
    console.log('sort', sort);
    console.log('group', group);
    console.log('filter', filter);
    // doAfetch
    if (sort) {
      setFilteredData(
        helpers.sorting({
          array: data,
          key: sort.object,
          order: sort.order,
        }),
      );
    }
  };

  useEffect(() => {}, [actionMenuStatus]);
  useEffect(() => {
    const search = ({ array, value, key }) =>
      array.filter(item => item[key].includes(value));

    if (!searchInputValue) {
      setFilteredData(data);
    } else {
      setFilteredData(
        search({
          array: data,
          value: searchInputValue,
          key: keyValue,
        }),
      );
    }
  }, [searchInputValue, data]);

  useEffect(() => {}, [filteredData]);

  return (
    <Root>
      <Header>{`${title} (${data && data.length})`}</Header>
      <ListToolbarWrapper>
        <Toolbar
          refreshAction={() => refreshAction()}
          onSearchChange={setSearchInputValue}
          setActionType={setActionType}
          setDisplayActionMenu={() => setDisplayActionMenu(!actionMenuStatus)}
        />
        <Wrapper>
          <ListCustom>
            {isLoading ? (
              <Loader />
            ) : (
              filteredData &&
              filteredData.map(item => (
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
      <Modal show={actionMenuStatus}>
        <ActionMenu
          actionType={selectedActionType}
          close={() => setDisplayActionMenu(false)}
          onSubmit={handleSelectActionMenuOption}
          options={actionMenuOptions}
        />
      </Modal>
    </Root>
  );
};

export default ListToolbarAction;
