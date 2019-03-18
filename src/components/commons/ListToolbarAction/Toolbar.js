import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Icon } from 'components/commons/Icons';

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

const actions = (t, setOption, setDisplayActionMenu) => [
  {
    title: t('commons.sort'),
    onClick: () => {
      setOption('sort');
      setDisplayActionMenu();
    },
    icon: '&#xe095;',
  },
  {
    title: t('commons.filter'),
    onClick: () => {
      setOption('filter');
      setDisplayActionMenu();
    },
    icon: '&#xe076;',
  },
  {
    title: t('commons.group'),
    onClick: () => {
      setOption('group');
      setDisplayActionMenu();
    },
    icon: '&#xe163;',
  },
];

const Toolbar = ({
  refreshAction,
  onSearchChange,
  setDisplayActionMenu,
  setActionType,
}) => {
  const { t } = useTranslation();

  return (
    <Root>
      <SearchForm onSubmit={event => event.preventDefault()}>
        <Input
          placeholder={t('commons.search')}
          onChange={event => onSearchChange(event.target.value)}
        />
        <Button type="submit" title={t('commons.search')}>
          <IconCustom>&#xe00d;</IconCustom>
        </Button>
        <Button
          type="button"
          onClick={refreshAction}
          title={t('commons.refresh')}
        >
          <IconCustom>&#xe00a;</IconCustom>
        </Button>
      </SearchForm>
      <ActionWrapper>
        {actions(t, setActionType, setDisplayActionMenu).map(action => {
          return (
            <Button
              key={action.title}
              type="button"
              title={action.title}
              onClick={action.onClick}
            >
              <IconRadiusCustom
                dangerouslySetInnerHTML={{ __html: action.icon }}
              />
            </Button>
          );
        })}
      </ActionWrapper>
    </Root>
  );
};

Toolbar.propTypes = {
  refreshAction: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  setDisplayActionMenu: PropTypes.func.isRequired,
  setActionType: PropTypes.func.isRequired,
};

export default Toolbar;
