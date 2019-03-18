import React from 'react';
import { List, ListItem } from 'components/commons/List';
import styled from '@emotion/styled';

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

const InputRadio = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border: 0.2rem solid ${({ theme }) => theme.customTheme.colors.gray};
  border-radius: 1rem;
  padding: 1px;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    border: 0.25rem solid ${({ theme }) => theme.customTheme.colors.blue};
  }
`;

const InputRadioDot = styled.div`
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.customTheme.colors.blue};
`;

const InvisibleInput = styled.input`
  visibility: hidden;
  height: 0.1rem;
  width: 0.1rem;
`;

const Label = styled.label`
  cursor: pointer;
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
              <InputRadio data-name="input-radio">
                {form.filter && form.filter[detail.value] === option && (
                  <InputRadioDot data-name="input-radio-dot" />
                )}
              </InputRadio>
              <Label htmlFor={option}>
                <InvisibleInput
                  id={option}
                  name={detail.value}
                  type="radio"
                  value={option}
                  onChange={() => {
                    return onSelect({ [detail.value]: option });
                  }}
                />
                {option}
              </Label>
            </ListItemCustom>
          );
        })}
    </List>
  );
};

export default FilterMenuDetailList;
