import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { List, ListItem } from 'components/commons/List';
import { InputRadioComplete } from 'components/commons/InputRadio';
import types from 'components/commons/ListToolbarAction/types';

const ListItemCustom = styled(ListItem)`
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ isSelected, theme }) =>
    isSelected && theme.colors.lightBlue};
  &:active {
    background-color: ${({ theme }) => theme.colors.blue};
    color: #fff;
    [data-name='input-radio'] {
      background-color: transparent;
      border-color: #fff;
      [data-name='input-radio-dot'] {
        background-color: #fff;
      }
    }
  }
`;
// $filter=CategoryID%20le%20100
//
const FilterMenuDetailList = ({ detail, form, onSelect }) => {
  return (
    <List>
      {detail &&
        detail.options.map((option, key) => {
          return (
            <ListItemCustom
              key={key}
              onClick={() => {
                return onSelect({
                  [detail.fieldName]: `${option.operator} ${option.value}`,
                });
              }}
              isSelected={
                form.filter && form.filter[detail.value] === option.value
              }
            >
              <InputRadioComplete
                id={option.value}
                data-name="input-radio"
                show={form.filter && form.filter[detail.value] === option.value}
                name={detail.label}
                type="radio"
                value={option.value}
                label={option.value}
              />
            </ListItemCustom>
          );
        })}
    </List>
  );
};

FilterMenuDetailList.propTypes = {
  detail: PropTypes.shape({ ...types.detail }),
  form: PropTypes.shape({ ...types.form }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

FilterMenuDetailList.defaultProps = {
  detail: null,
};

export default FilterMenuDetailList;
