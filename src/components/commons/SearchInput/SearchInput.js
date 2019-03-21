/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import { Icon } from 'components/commons/Icons';
import { useTranslation } from 'react-i18next';
import { FlexBox } from 'components/Layout';
import InputText from './Input';
import { BtnRegular, BtnGroup } from '../Buttons';

const Root = styled(FlexBox)`
  margin: 0.5rem;
  & > input,
  button {
    margin: 0;
  }
  & input:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const BtnGroupCustom = styled(BtnGroup)`
  margin: 0;
  & button {
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
    border-color: ${({ theme }) => theme.custom.forms.element.borderColor};
    background-color: ${({ theme }) => theme.custom.colors.neutral.neutral2};
    &:hover {
      background-color: ${({ theme }) => theme.custom.colors.neutral.neutral4};
    }
    &:active {
      ${({ theme }) => theme.custom.buttons.actions['&:active']}
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

const SearchInput = ({ reset, placeholder, onChange }) => {
  const { t } = useTranslation();
  return (
    <Root>
      <InputText type="text" placeholder={placeholder} onChange={onChange} />
      <BtnGroupCustom>
        <BtnRegular square type="submit" title={t('commons.search')}>
          <Icon>&#xe00d;</Icon>
        </BtnRegular>
        {reset && (
          <BtnRegular
            square
            type="submit"
            title={t('commons.refresh')}
            onClick={reset.onClick}
          >
            <Icon>&#xe00a;</Icon>
          </BtnRegular>
        )}
      </BtnGroupCustom>
    </Root>
  );
};

export default SearchInput;
