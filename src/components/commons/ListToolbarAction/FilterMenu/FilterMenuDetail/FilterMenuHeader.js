import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Icon, ChevronLeft } from 'components/commons/Icons';
import { useTranslation } from 'react-i18next';
import { ResetButton } from 'components/commons/Buttons';

const SearchForm = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 2.6rem;
  padding: 0.2rem 0 0.2rem 0.2rem;
  margin: 0.5rem;
  border: 1px solid #bfbfbf;
  &::placeholder {
    font-style: italic;
  }
  &:hover {
    border: 1px solid #427cac;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.2rem;
  border: none;
  outline: none;
  &::placeholder {
    font-style: italic;
  }
`;

const IconCustom = styled(Icon)`
  font-size: 1.5rem;
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 0;
  color: #346187;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FilterMenuHeader = ({ goBack }) => {
  const { t } = useTranslation();
  const [input, onInputChange] = useState('');
  return (
    <Wrapper>
      <ChevronLeft
        title={t('commons.return')}
        md
        margin="1rem 0 1rem 0.5rem"
        onClick={goBack}
      />
      <SearchForm onSubmit={event => event.preventDefault()}>
        <Input
          placeholder={t('commons.search')}
          onChange={event => onInputChange(event.target.value)}
          value={input}
        />
        <ResetButton type="submit" title={t('commons.search')}>
          <IconCustom>&#xe00d;</IconCustom>
        </ResetButton>
      </SearchForm>
    </Wrapper>
  );
};

export default FilterMenuHeader;
