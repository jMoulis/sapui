import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { Icon, GridIcon } from 'components/commons/Icons';
import FlexBox from './FlexBox';

const AppTitle = styled.h3`
  display: flex;
  justify-content: center;
  flex: 2;
  color: ${({ theme }) => theme.custom.colors.action.secondary};
`;

const Root = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.6rem;
  background-color: ${({ theme }) => theme.custom.colors.shell.shell1};
  padding: 1rem;
  & > * {
    color: ${({ theme }) => theme.custom.colors.action.secondary};
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Logo = styled.div`
  background-image: ${({ logo }) => `url(${logo})`};
  background-size: contain;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const Navbar = ({ company, history }) => {
  return (
    <Root>
      <FlexBox css={{ alignItems: 'center' }}>
        <Logo logo={company.logo} />
        <AppTitle>{company.name}</AppTitle>
      </FlexBox>
      <FlexBox css={{ width: '3rem', height: '3rem' }}>
        <Img
          src="https://unpkg.com/fiori-fundamentals@1.3.3/dist/images/copilot.png"
          alt="Siri"
        />
      </FlexBox>
      <FlexBox>
        <Icon>&#xe0ca;</Icon>
        <GridIcon onClick={() => history.push('/')} />
      </FlexBox>
    </Root>
  );
};

Navbar.propTypes = {
  companyName: PropTypes.string,
};

Navbar.defaultProps = {
  companyName: '',
};

export default withRouter(Navbar);
