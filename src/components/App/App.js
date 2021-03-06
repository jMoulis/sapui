import React, { useEffect, Suspense, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Footer } from 'components/Layout';
import CompanyLogo from 'assets/images/logo.jpg';
import { fetchConfig } from 'store/reducers/hedgingReducer';
import NotFound from 'components/NotFound/NotFound';
import { Dashboard } from 'components/Dashboard';
import { Toggle } from 'components/Toggle';
import { FlexBox } from 'components/commons/FlexBox';
import { Navbar } from 'components/Navbar';
import { LeftMenu } from 'components/LeftMenu';
import { Icon } from 'components/commons/Icons';
import { Sales } from 'components/Sales';
import { ActionPanel } from 'components/ActionPanel';
import actions from 'components/ActionPanel/actions';

const Root = styled.main`
  display: grid;
  width: 100vw;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 6rem 1fr 6rem;
  backgroundcolor: ${({ collapsed }) => collapsed && 'rgba(0, 0, 0, 0.4)'};
  ${({ theme }) => {
    return {
      [theme.mediaQueries.sm]: {
        gridTemplateAreas: `
          'header header header right'
          'left main action right'
          'footer footer footer right'`,
        gridTemplateColumns: 'auto 1fr 5rem auto',
        gridTemplateRows: '6rem 1fr 6rem',
      },
    };
  }};
`;
const Content = styled.div`
  grid-area: main;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgrounds.background1};
`;

const isSmallDevice = theme =>
  window.matchMedia(`(max-width: ${theme.breakpoints.sm}px)`).matches;

const App = ({ fetchConfigAction, config, theme, error }) => {
  const [displayLeftPanel, setDisplayLeftPanel] = useState(
    isSmallDevice(theme),
  );
  const [isResizing, setResizing] = useState(false);
  const [displayRightPanel, setDisplayRightPanel] = useState(true);
  const [isSmall, setDeviceSize] = useState(isSmallDevice(theme));
  const [activeApp, setActiveApp] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const rootRef = useRef();
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

  const handleSetActiveApp = app => {
    setActiveApp(app);
    setSelectedMenu(app.label);
    if (displayRightPanel) {
      return setDisplayRightPanel(!displayRightPanel);
    }
    if (app.label === activeApp.label) {
      return setDisplayRightPanel(!displayRightPanel);
    }
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
        autoClose
      >
        <LeftMenu />
      </Toggle>
      <Content ref={rootRef}>
        <Suspense fallback={<></>}>
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <Dashboard
                  {...routeProps}
                  setActiveApp={handleSetActiveApp}
                  actions={actions}
                  rootBoundingRect={rootRef}
                />
              )}
            />
            <Route path="/sales" component={Sales} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Content>

      {!isSmall && (
        <ActionPanel
          setActiveApp={handleSetActiveApp}
          collapsed={displayRightPanel}
          selectedMenu={selectedMenu}
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
        <>{activeApp && <activeApp.component />}</>
      </Toggle>
      <Footer>
        <FlexBox flex="1" justifyContent="flex-end">
          {false && (
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
