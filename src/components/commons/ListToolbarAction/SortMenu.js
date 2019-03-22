import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { List, ListItem } from 'components/commons/List';
import { InputRadioComplete } from 'components/commons/InputRadio';
import types from 'components/commons/ListToolbarAction/types';

const Root = styled.div``;
const Title = styled.span`
  label: Title;
  padding: 1rem;
  color: ${({ theme }) => theme.fonts.colors.lightBlue};
`;

const ListItemCustom = styled(ListItem)`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const SortMenu = ({ action, form, menus }) => {
  const { t } = useTranslation();
  const [queries, setQuery] = useState([]);
  const [selectedValue, setSelectedValue] = useState({
    order: null,
    object: null,
  });
  const [prevObject, setPrevObject] = useState(null);
  const [prevOrder, setPrevOrder] = useState(null);

  const buildQuery = ({ item, type }, key) => {
    const itemValue = item[key].value;
    const objectSet = queries.find(q => q.object === itemValue);

    if (!objectSet && type !== 'order')
      return setQuery(q => [
        ...q,
        { object: item[key].value, order: prevOrder || null },
      ]);

    if (type === 'order') {
      const updatedArray = queries.map(q => {
        if (q.object === prevObject) {
          return {
            ...q,
            order: item[key].value,
          };
        }
        return { ...q };
      });
      return setQuery(updatedArray);
    }
  };

  useEffect(() => {
    const response = queries.reduce((acc, query) => {
      if (!query.order) return acc;
      return [...acc, `${query.object} ${query.order}`];
    }, []);
    if (response.length > 0) {
      action({
        ...form,
        sort: `$orderby=${response.toString()}`,
      });
    }
  }, [queries]);

  return (
    <Root>
      {menus.map(option => {
        return (
          <Wrapper key={option.title}>
            <Title>{option.title}</Title>
            <List>
              {Object.keys(option.item).map(key => {
                return (
                  <ListItemCustom
                    key={key}
                    onClick={() => {
                      buildQuery(option, key);
                      if (option.type !== 'order') {
                        setPrevObject(option.item[key].value);
                      } else {
                        setPrevOrder(option.item[key].value);
                      }
                      setSelectedValue(prevState => ({
                        ...prevState,
                        [option.type]: option.item[key].value,
                      }));
                    }}
                  >
                    <InputRadioComplete
                      data-name="input-radio"
                      show={
                        option.item[key].value ===
                        (selectedValue && selectedValue[option.type])
                      }
                      id={key}
                      name={option.type}
                      type="radio"
                      value={option.item[key].value}
                      label={`${t('sorting.sortOrder')} ${
                        option.item[key].title
                      }`}
                    />
                  </ListItemCustom>
                );
              })}
            </List>
          </Wrapper>
        );
      })}
    </Root>
  );
};

SortMenu.propTypes = {
  action: PropTypes.func.isRequired,
  form: PropTypes.shape({ ...types.form }).isRequired,
  menus: PropTypes.arrayOf(PropTypes.shape({ ...types.detail })).isRequired,
};
export default SortMenu;
