import React from 'react';
import styled from '@emotion/styled';
import { List, ListItem } from 'components/commons/List';
import { useTranslation } from 'react-i18next';

const Root = styled.div``;
const Title = styled.span`
  label: Title;
  padding: 1rem;
  color: ${({ theme }) => theme.customTheme.fonts.colors.lightBlue};
`;

const ListItemCustom = styled(ListItem)`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
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
const SortMenu = ({ action, form, options }) => {
  const { t } = useTranslation();
  return (
    <Root>
      {options.map(option => {
        return (
          <Wrapper key={option.title}>
            <Title>{option.title}</Title>
            <List>
              {Object.keys(option.item).map(key => {
                return (
                  <ListItemCustom key={key}>
                    <InputRadio>
                      {option.item[key].value ===
                        (form.sort && form.sort[option.type]) && (
                        <InputRadioDot />
                      )}
                    </InputRadio>
                    <label htmlFor={key}>
                      <InvisibleInput
                        id={key}
                        name={option.type}
                        type="radio"
                        value={option.item[key].value}
                        onChange={() => {
                          return action({
                            ...form,
                            sort: {
                              ...form.sort,
                              [option.type]: option.item[key].value,
                            },
                          });
                        }}
                      />
                      {`${t('sorting.sortOrder')} ${option.item[key].title}`}
                    </label>
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

export default SortMenu;
