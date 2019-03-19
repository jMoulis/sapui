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
    isSelected && theme.customTheme.colors.lightBlue};
  &:active {
    background-color: ${({ theme }) => theme.customTheme.colors.blue};
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

const FilterMenuDetailList = ({ detail, form, onSelect }) => {
  return (
    <List>
      {detail &&
        detail.options.map(option => {
          return (
            <ListItemCustom
              key={option}
              onClick={() => {
                return onSelect({ [detail.value]: option });
              }}
              isSelected={form.filter && form.filter[detail.value] === option}
            >
              <InputRadioComplete
                id={option}
                data-name="input-radio"
                show={form.filter && form.filter[detail.value] === option}
                name={detail.value}
                type="radio"
                value={option}
                label={option}
                onChange={() => {
                  return onSelect({ [detail.value]: option });
                }}
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
