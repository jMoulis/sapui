import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'emotion-theming';
import { Icon, GridIcon, BurgerMenu } from 'components/commons/Icons';
import FlexBox from './FlexBox';

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
  background-color: ${({ theme }) => theme.colors.shell.shell1};
  padding: 1rem;
  /* z-index: ${({ shouldCollapsed }) => shouldCollapsed && '-1'}; */
  & > * {
    color: ${({ theme }) => theme.colors.action.secondary};
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
  margin: 0 1rem;
`;

const IconWrapper = styled(FlexBox)`
  & i {
    margin: 0.5rem;
    font-size: 2.5rem;
  }
  & i:first-of-type {
    margin-right: 2rem;
  }
`;

const isSmallDevice = theme =>
  window.matchMedia(`(max-width: ${theme.breakpoints.xs}px)`).matches;

const Navbar = ({
  company,
  history,
  setDisplayRightPanel,
  setDisplayLeftPanel,
  shouldCollapsed,
  theme,
  isSmall,
}) => {
  const shouldDisplayBurgerMenu = () => {
    if (isSmall) {
      return true;
    }
    return false;
  };
  return (
    <Root shouldCollapsed={shouldCollapsed}>
      <FlexBox css={{ alignItems: 'center' }}>
        {shouldDisplayBurgerMenu() && (
          <BurgerMenu
            onClick={setDisplayLeftPanel}
            css={{ fontSize: '2.5rem' }}
          />
        )}
        <Logo logo={company.logo} />
        <AppTitle>{company.name}</AppTitle>
      </FlexBox>
      <FlexBox css={{ width: '3rem', height: '3rem' }}>
        <Img
          src="https://unpkg.com/fiori-fundamentals@1.3.3/dist/images/copilot.png"
          alt="Siri"
        />
      </FlexBox>

      <IconWrapper>
        <Icon>&#xe0ca;</Icon>
        {!isSmall && <GridIcon onClick={setDisplayRightPanel} />}
      </IconWrapper>
    </Root>
  );
};

Navbar.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
  }),
  history: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.array,
    ]),
  ).isRequired,
};

Navbar.defaultProps = {
  company: '',
};

const NavBarWithTheme = withTheme(Navbar);
export default withRouter(NavBarWithTheme);
