import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Checked } from 'assets/icons/check-solid.svg';

const Root = styled.div`
  label: ListPasswordHint;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const List = styled.ul`
  padding-top: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  font-size: 1.2rem;
  position: relative;
  color: ${({ done }) => done && 'green'};
  display: flex;
  align-items: center;
`;

const CheckBox = styled.div`
  height: 1rem;
  width: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const ListPasswordHint = ({ value }) => {
  const { t } = useTranslation();
  const specialChar = new RegExp('[!@#$%^&*(),.?":{}|<>;]');
  const capitalCase = new RegExp('[A-Z]+');
  const number = new RegExp('[0-9]');

  return (
    <Root>
      <List>
        <ListItem done={value.length >= 8}>
          <CheckBox>
            {value.length >= 8 && <Checked height="1rem" width="1rem" />}
          </CheckBox>
          {t('passwordHints.length')}
        </ListItem>
        <ListItem done={specialChar.test(value)}>
          <CheckBox>
            {specialChar.test(value) && <Checked height="1rem" width="1rem" />}
          </CheckBox>
          {t('passwordHints.special')}
        </ListItem>
      </List>
      <List>
        <ListItem done={capitalCase.test(value)}>
          <CheckBox>
            {capitalCase.test(value) && <Checked height="1rem" width="1rem" />}
          </CheckBox>
          {t('passwordHints.uppercase')}
        </ListItem>
        <ListItem done={number.test(value)}>
          <CheckBox>
            {number.test(value) && <Checked height="1rem" width="1rem" />}
          </CheckBox>
          {t('passwordHints.number')}
        </ListItem>
      </List>
    </Root>
  );
};

export default ListPasswordHint;
