/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { oDataRouter, useODataApi } from 'services/oData';
import { NavLink } from 'react-router-dom';
import List from 'components/commons/List';
import ListItem from 'components/commons/ListItem';
import Icon from 'components/commons/Icon';
import Loader from 'components/commons/Loader/Loader';
import Toolbar from './Toolbar';
import Modal from '../commons/Modal';
import ActionMenu from './ActionMenu';
import Helpers from '../../services/Helpers';

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

const ListCategories = () => {
  const helpers = new Helpers();
  let timer = null;
  const [categories, setCategories] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState(null);
  const [actionMenuStatus, setDisplayActionMenu] = useState(false);
  const [selectedOption, setOption] = useState(null);

  const { data, isLoading, isError, doFetch, refresh } = useODataApi({
    responseKey: 'categories',
    defaultValue: [],
  });

  const handleSelectActionMenuOption = ({ sort, group, filter }) => {
    if (sort) {
      setCategories(
        helpers.sorting({
          array: data.categories,
          key: sort.object,
          order: sort.order,
        }),
      );
    }
  };

  useEffect(() => {
    timer = setTimeout(() => {
      doFetch(oDataRouter.categories());
      setCategories(data.categories);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  useEffect(() => {
    const search = ({ array, value, key }) =>
      array.filter(item => item[key].includes(value));

    if (!searchInputValue) {
      setCategories(data.categories);
    } else {
      setCategories(
        search({
          array: data.categories,
          value: searchInputValue,
          key: 'CategoryName',
        }),
      );
    }
  }, [searchInputValue, data]);

  useEffect(() => {}, [categories]);

  if (isError) return <span>Error</span>;
  return (
    <Root>
      <Header>
        {`Categories (${data.categories && data.categories.length})`}
      </Header>
      <ListToolbarWrapper>
        <Toolbar
          refreshAction={() => refresh()}
          onSearchChange={setSearchInputValue}
          setOption={setOption}
          setDisplayActionMenu={() => setDisplayActionMenu(!actionMenuStatus)}
        />
        <Wrapper>
          {isLoading && <Loader />}
          <ListCustom>
            {categories &&
              categories.map(category => (
                <ListItem key={category.CategoryID}>
                  <NavLinkCustom to={`/exo/${category.CategoryID}`}>
                    {category.CategoryName}
                    <IconCustom>&#xe066;</IconCustom>
                  </NavLinkCustom>
                </ListItem>
              ))}
          </ListCustom>
        </Wrapper>
      </ListToolbarWrapper>
      <Modal show={actionMenuStatus}>
        <ActionMenu
          option={selectedOption}
          close={setDisplayActionMenu}
          onSubmit={handleSelectActionMenuOption}
        />
      </Modal>
    </Root>
  );
};

export default ListCategories;
