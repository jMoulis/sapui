import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { Icon } from 'components/commons/Icons';
import { ChevronLeft } from '../commons/Icons';

const AppTitle = styled.h3`
  display: flex;
  justify-content: center;
  flex: 2;
`;

const Root = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.6rem;
  background-color: ${({ theme }) => theme.customTheme.colors.lightBlue};
  color: ${({ theme }) => theme.customTheme.colors.blue};
  padding: 1rem;
  & > * {
    text-shadow: 0 0 0.125rem #ffffff;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
`;

const ButtonLink = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem;
  transition: all 100ms ease-in;
  border-radius: 0.3rem;
  color: #346187;
  font-size: 1.5rem;
  text-shadow: 0 0 0.125rem #ffffff;
  &:hover {
    background-color: rgba(52, 97, 135, 0.15);
  }
`;

const Navbar = ({ activeAppTitle, history }) => {
  return (
    <Root>
      <IconsWrapper>
        <Icon>&#xe0ca;</Icon>
        <ChevronLeft onClick={() => history.goBack()} />
      </IconsWrapper>
      <AppTitle>
        <ButtonLink>{activeAppTitle}</ButtonLink>
      </AppTitle>
    </Root>
  );
};

Navbar.propTypes = {
  activeAppTitle: PropTypes.string,
};

Navbar.defaultProps = {
  activeAppTitle: '',
};

export default withRouter(Navbar);
