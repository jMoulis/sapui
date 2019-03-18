import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { List, ListItem } from 'components/commons/List';
import { useTranslation } from 'react-i18next';
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
  color: ${({ theme }) => theme.customTheme.fonts.colors.lightBlue};
`;

const ListItemCustom = styled(ListItem)`
  padding: 1rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  &:active {
    background-color: ${({ theme }) => theme.customTheme.colors.blue};
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
  color: ${({ theme }) => theme.customTheme.fonts.colors.lightBlue};
  font-size: 1.2rem;
`;
const FilterMenu = ({ action, form, options }) => {
  const { t } = useTranslation();
  const [showdetail, setDetailDisplay] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  const handleSelectFilter = name => {
    setDetailDisplay(true);
    setSelectedItem(name);
  };

  return (
    <Root>
      <Slide displayStatus={!showdetail}>
        <Wrapper>
          <Title>{t('filtering.filterBy')}</Title>
          <List>
            {options.map(option => {
              return (
                <ListItemCustom
                  key={option.value}
                  onClick={() => handleSelectFilter(option.value)}
                >
                  <span>{option.name}</span>
                  <Text>{form.filter && form.filter[option.value] && 1}</Text>
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
              return action({
                ...form,
                filter: {
                  ...form.filter,
                  ...value,
                },
              });
            }}
            detail={
              selectedItem &&
              options.find(option => option.value === selectedItem)
            }
          />
        </Wrapper>
      </Slide>
    </Root>
  );
};

FilterMenu.propTypes = {
  action: PropTypes.func.isRequired,
  form: PropTypes.shape({
    sort: PropTypes.object,
    filter: PropTypes.object,
    group: PropTypes.object,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};
FilterMenu.defaultProps = {
  options: null,
};
export default FilterMenu;
