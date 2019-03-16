import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Icon from 'components/commons/Icon';
import Modal from 'components/commons/Modal';
import ActionMenu from './ActionMenu';

const Root = styled.div`
  label: Toolbar;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 1rem;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 2.6rem;
  padding: 0.2rem 0 0.2rem 0.2rem;
  border: 1px solid #bfbfbf;
  &::placeholder {
    font-style: italic;
  }
  &:hover {
    border: 1px solid #427cac;
  }
`;

const Input = styled.input`
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

const IconRadiusCustom = styled(IconCustom)`
  border-radius: 2px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;

const ActionWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const Toolbar = ({ refreshAction, onSearchChange }) => {
  const { t } = useTranslation();
  const [isModal, setDisplayModal] = useState(false);
  const [selectedAction, setAction] = useState(null);
  return (
    <Root>
      <SearchForm onSubmit={event => event.preventDefault()}>
        <Input
          placeholder={t('categoryApp.search')}
          onChange={event => onSearchChange(event.target.value)}
        />
        <Button type="submit" title={t('categoryApp.search')}>
          <IconCustom>&#xe00d;</IconCustom>
        </Button>
        <Button
          type="button"
          onClick={refreshAction}
          title={t('categoryApp.refresh')}
        >
          <IconCustom>&#xe00a;</IconCustom>
        </Button>
      </SearchForm>
      <ActionWrapper>
        <Button
          type="button"
          title={t('categoryApp.sort')}
          onClick={() => {
            setAction('sort');
            setDisplayModal(prevState => !prevState);
          }}
        >
          <IconRadiusCustom>&#xe095;</IconRadiusCustom>
        </Button>
        <Button
          type="button"
          title={t('categoryApp.filter')}
          onClick={() => {
            setAction('filter');
            setDisplayModal(prevState => !prevState);
          }}
        >
          <IconRadiusCustom>&#xe076;</IconRadiusCustom>
        </Button>
        <Button
          type="button"
          title={t('categoryApp.group')}
          onClick={() => {
            setAction('group');
            setDisplayModal(prevState => !prevState);
          }}
        >
          <IconRadiusCustom>&#xe163;</IconRadiusCustom>
        </Button>
      </ActionWrapper>
      {true && (
        <Modal>
          <ActionMenu action={selectedAction} close={setDisplayModal} />
        </Modal>
      )}
    </Root>
  );
};

export default Toolbar;
