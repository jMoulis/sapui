import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'emotion-theming';
import { Icon } from 'components/commons/Icons';
import { FlexBox } from 'components/commons/FlexBox';
import profilePhoto from 'assets/images/dummy.jpg';
import { Avatar } from 'components/commons/Avatar';

const AppTitle = styled.h3`
  display: flex;
  justify-content: center;
  flex: 2;
  color: ${({ theme }) => theme.colors.action.secondary};
`;

const Root = styled.nav`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.shell.shell1};
  & > * {
    color: ${({ theme }) => theme.colors.action.secondary};
  }
`;

const Logo = styled.div`
  background-image: ${({ logo }) => `url(${logo})`};
  background-size: contain;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const Navbar = ({ company, setDisplayLeftPanel, collapsed, isSmall }) => {
  const shouldDisplayBurgerMenu = () => isSmall;
  return (
    <Root collapsed={collapsed}>
      <FlexBox css={{ alignItems: 'center' }}>
        {shouldDisplayBurgerMenu() && (
          <Icon
            icon="burger"
            data-id="menu"
            onClick={setDisplayLeftPanel}
            size="2.5rem"
          />
        )}
        <Logo logo={company.logo} />
        {!isSmall && <AppTitle>{company.name}</AppTitle>}
      </FlexBox>
      <FlexBox alignItems="center">
        <Avatar img={profilePhoto} size="3rem" />
      </FlexBox>
    </Root>
  );
};

Navbar.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
  }),
  setDisplayLeftPanel: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  company: '',
};

const NavBarWithTheme = withTheme(Navbar);

export default withRouter(NavBarWithTheme);
