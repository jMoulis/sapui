/* eslint-disable react/forbid-prop-types */
import React, { useEffect, Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Navbar, Footer, FlexBox } from 'components/Layout';
import CompanyLogo from 'assets/images/logo.jpg';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { fetchConfig } from 'components/Hedging/store/reducers/hedgingReducer';
import { GridIcon } from 'components/commons/Icons';
import NotFound from 'components/NotFound/NotFound';
import { Toggle, Navigation } from 'components/Hedging/Navigation';
import ListActions from './ListActions';

const Root = styled.main`
  display: grid;
  grid-template-areas:
    'header header header right'
    'left main action right'
    'footer footer footer right';
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 6rem 1fr 6rem;
  width: 100vw;
  ${({ theme, shouldCollapsed }) => {
    return {
      [theme.mediaQueries.xs]: {
        gridTemplateAreas: `'header'
          'main'
          'footer';`,
        gridTemplateColumns: '1fr',
        gridTemplateRows: '6rem 1fr 6rem',
        backgroundColor: shouldCollapsed && 'rgba(0, 0, 0, 0.4)',
      },
    };
  }};
`;

const AppMenu = styled(GridIcon)`
  font-size: 3rem;
  margin-right: 1rem;
`;
const Text = styled.p``;

const isSmallDevice = theme =>
  window.matchMedia(`(max-width: ${theme.breakpoints.xs}px)`).matches;

const App = ({ fetchConfigAction, config, theme }) => {
  const [displayLeftPanel, setDisplayLeftPanel] = useState(
    isSmallDevice(theme),
  );
  const [displayRightPanel, setDisplayRightPanel] = useState(true);
  const [isSmall, setDeviceSize] = useState(isSmallDevice(theme));
  const handleResize = () => {
    return window.addEventListener('resize', () => {
      setDeviceSize(isSmallDevice(theme));
    });
  };
  const removeResize = () => {
    return window.removeEventListener('resize', () => {
      setDeviceSize(isSmallDevice(theme));
    });
  };
  useEffect(() => {
    fetchConfigAction();
  }, []);

  useEffect(() => {
    handleResize();
    return () => {
      removeResize();
    };
  }, []);

  const company = {
    name: 'FakeCompany',
    logo: CompanyLogo,
  };

  const handleClick = ({ target }) => {
    if (isSmall) {
      if (target.tagName === 'SECTION') {
        setDisplayLeftPanel(true);
        setDisplayRightPanel(true);
      }
    }
  };

  if (!config) return <span>Loader</span>;

  return (
    <Root
      onClick={event =>
        (!displayLeftPanel || !displayRightPanel) && handleClick(event)
      }
      shouldCollapsed={!displayLeftPanel || !displayRightPanel}
    >
      <Navbar
        company={company}
        setDisplayRightPanel={() => setDisplayRightPanel(!displayRightPanel)}
        setDisplayLeftPanel={() => setDisplayLeftPanel(!displayLeftPanel)}
        shouldCollapsed={!displayLeftPanel || !displayRightPanel}
        isSmall={isSmall}
      />
      <Toggle
        side="left"
        callback={() => setDisplayLeftPanel(!displayLeftPanel)}
        shouldCollapsed={displayLeftPanel}
      >
        <Navigation />
      </Toggle>
      <Suspense fallback={<></>}>
        <Switch>
          {Object.values(config.router).map(route => {
            return <RouteWithSubRoutes {...route} key={route.path} />;
          })}
          <Route component={NotFound} />
        </Switch>
      </Suspense>

      {!isSmall && (
        <ListActions
          callback={() => setDisplayRightPanel(!displayRightPanel)}
        />
      )}

      <Toggle
        side={isSmall ? 'bottom' : 'right'}
        callback={() => setDisplayRightPanel(!displayRightPanel)}
        shouldCollapsed={displayRightPanel}
        hidden
        width="30rem"
      >
        <Text>RightPanel</Text>
      </Toggle>
      <Footer>
        <FlexBox
          css={{
            justifyContent: 'flex-end',
            flex: 1,
          }}
        >
          {isSmall && (
            <AppMenu onClick={() => setDisplayRightPanel(!displayRightPanel)} />
          )}
        </FlexBox>
      </Footer>
    </Root>
  );
};

App.propTypes = {
  config: PropTypes.shape({
    entities: PropTypes.object,
    router: PropTypes.object,
    initNavMenu: PropTypes.arrayOf(PropTypes.string),
  }),
  fetchConfigAction: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

App.defaultProps = {
  config: null,
};
const mapStateToProps = ({ hedgingReducer }) => ({
  config: hedgingReducer.config,
});

const mapDispatchToProps = dispatch => ({
  fetchConfigAction: () => {
    dispatch(fetchConfig());
  },
});

const AppWithTheme = withTheme(App);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppWithTheme),
);
