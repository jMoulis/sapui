import React, { useEffect, Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Footer } from 'components/Layout';
import CompanyLogo from 'assets/images/logo.jpg';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { fetchConfig } from 'store/reducers/hedgingReducer';
import { GridIcon } from 'components/commons/Icons';
import NotFound from 'components/NotFound/NotFound';
import { Navigation } from 'components/Navigation';
import { Toggle } from 'components/Toggle';
import { FlexBox } from 'components/commons/FlexBox';
import { Navbar } from 'components/Navbar';
import { ActionPanel } from 'components/ActionPanel';
import { LeftMenu } from '../LeftMenu';
import Icon from '../commons/Icons/Icon';

const Root = styled.main`
  display: grid;
  grid-template-areas:
    'header header header right'
    'left main action right'
    'footer footer footer right';
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 6rem 1fr 6rem;
  width: 100vw;
  ${({ theme, collapsed }) => {
    return {
      [theme.mediaQueries.xs]: {
        gridTemplateAreas: `'header'
          'main'
          'footer';`,
        gridTemplateColumns: '1fr',
        gridTemplateRows: '6rem 1fr 6rem',
        backgroundColor: collapsed && 'rgba(0, 0, 0, 0.4)',
      },
    };
  }};
`;

const AppMenu = styled(GridIcon)`
  font-size: 3rem;
  margin-right: 1rem;
`;

const isSmallDevice = theme =>
  window.matchMedia(`(max-width: ${theme.breakpoints.xs}px)`).matches;

const App = ({ fetchConfigAction, config, theme, error }) => {
  const [displayLeftPanel, setDisplayLeftPanel] = useState(
    isSmallDevice(theme),
  );
  const [isResizing, setResizing] = useState(false);
  const [displayRightPanel, setDisplayRightPanel] = useState(true);
  const [isSmall, setDeviceSize] = useState(isSmallDevice(theme));
  const [activeApp, setActiveApp] = useState(null);

  useEffect(() => {
    fetchConfigAction();
    let resizedId;
    const doneResizing = () => setResizing(false);
    window.addEventListener('resize', () => {
      setResizing(true);
      clearTimeout(resizedId);
      resizedId = setTimeout(doneResizing, 100);
      setDeviceSize(isSmallDevice(theme));
    });
    return () => {
      window.removeEventListener('resize', () =>
        setDeviceSize(isSmallDevice(theme)),
      );
    };
  }, []);

  const company = {
    name: 'FakeCompany',
    logo: CompanyLogo,
  };

  if (error) return <span>{error}</span>;
  if (!config) return <span>Loader</span>;
  return (
    <Root collapsed={!displayLeftPanel || !displayRightPanel}>
      <Navbar
        company={company}
        setDisplayRightPanel={() => {
          setDisplayRightPanel(!displayRightPanel);
        }}
        setDisplayLeftPanel={() => {
          setDisplayLeftPanel(!setDisplayLeftPanel);
          setDisplayRightPanel(true);
        }}
        collapsed={!displayLeftPanel || !displayRightPanel}
        isSmall={isSmall}
      />
      <Toggle
        side="left"
        callback={() => {
          setDisplayLeftPanel(!displayLeftPanel);
          if (isSmall) {
            setDisplayRightPanel(true);
          }
        }}
        collapsed={displayLeftPanel}
        close={() => setDisplayLeftPanel(true)}
        isSmall={isSmall}
        isResizing={isResizing}
      >
        <Navigation />
      </Toggle>
      <Suspense fallback={<></>}>
        <Switch>
          <RouteWithSubRoutes {...config.app} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>

      {!isSmall && (
        <ActionPanel
          callback={app => {
            setActiveApp(app);
            setDisplayRightPanel(!displayRightPanel);
          }}
        />
      )}

      <Toggle
        side={isSmall ? 'bottom' : 'right'}
        callback={() => {
          setDisplayRightPanel(!displayRightPanel);
        }}
        collapsed={displayRightPanel}
        hidden
        width="30rem"
        isSmall={isSmall}
        close={() => setDisplayRightPanel(true)}
        isResizing={isResizing}
      >
        <>{activeApp}</>
      </Toggle>
      <Footer>
        <FlexBox flex="1" justifyContent="flex-end">
          {isSmall && (
            <Icon
              icon="grid"
              data-id="menu"
              css={{
                margin: '0.5rem',
                fontSize: '2.5rem',
              }}
              onClick={() => {
                setDisplayRightPanel(!displayRightPanel);
                setDisplayLeftPanel(true);
              }}
            />
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
  error: PropTypes.string,
};

App.defaultProps = {
  config: null,
  error: null,
};
const mapStateToProps = ({ hedgingReducer }) => ({
  config: hedgingReducer.config,
  error: hedgingReducer.error,
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
