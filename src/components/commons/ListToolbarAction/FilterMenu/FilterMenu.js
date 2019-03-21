import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { List, ListItem } from 'components/commons/List';
import types from 'components/commons/ListToolbarAction/types';
import FilterMenuDetail from './FilterMenuDetail/FilterMenuDetail';

const Root = styled.div`
  overflow: hidden;
  display: flex;
`;
const Title = styled.span`
  label: Title;
  display: block;
  margin-top: 2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.custom.fonts.colors.lightBlue};
`;

const ListItemCustom = styled(ListItem)`
  padding: 1rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  &:active {
    background-color: ${({ theme }) => theme.custom.colors.blue};
    color: #fff;
  }
`;

const Slide = styled.div`
  display: flex;
  min-width: 35rem;
  transform: ${({ displayStatus }) =>
    displayStatus ? 'translateX(0)' : 'translateX(-35rem)'};
  transition: all 300ms;
`;

const Wrapper = styled.div`
  min-width: 35rem;
`;

const Text = styled.span`
  display: block;
  color: ${({ theme }) => theme.custom.fonts.colors.lightBlue};
  font-size: 1.2rem;
`;

const FilterMenu = ({ action, form, menus }) => {
  const { t } = useTranslation();
  const [showdetail, setDetailDisplay] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [queries, setQuery] = useState([]);
  const handleSelectFilter = name => {
    setDetailDisplay(true);
    setSelectedItem(name);
  };

  useEffect(() => {
    console.log('filterMenu');
    const response = Object.keys(queries).map(key => {
      return `${key} ${queries[key]}`;
    }, []);

    action({
      ...form,
      filter: `$filter=${response.join(',')}`,
    });
  }, [queries]);

  return (
    <Root>
      <Slide displayStatus={!showdetail}>
        <Wrapper>
          <Title>{t('filtering.filterBy')}</Title>
          <List>
            {menus.map(menu => {
              return (
                <ListItemCustom
                  key={menu.fieldName}
                  onClick={() => handleSelectFilter(menu.fieldName)}
                >
                  <span>{menu.label}</span>
                  <Text>{form.filter && form.filter[menu.fieldName] && 1}</Text>
                </ListItemCustom>
              );
            })}
          </List>
        </Wrapper>
        <Wrapper>
          <FilterMenuDetail
            goBack={() => setDetailDisplay(false)}
            displayStatus={showdetail}
            form={form}
            onSelect={value => {
              setDetailDisplay(false);
              setQuery(prevState => ({ ...prevState, ...value }));
            }}
            detail={
              (selectedItem &&
                menus.find(menu => menu.fieldName === selectedItem)) ||
              null
            }
          />
        </Wrapper>
      </Slide>
    </Root>
  );
};

FilterMenu.propTypes = {
  action: PropTypes.func.isRequired,
  form: PropTypes.shape({ ...types.form }).isRequired,
  menus: PropTypes.arrayOf(PropTypes.shape({ ...types.detail })),
};
FilterMenu.defaultProps = {
  menus: null,
};
export default FilterMenu;
