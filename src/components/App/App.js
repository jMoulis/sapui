/* eslint-disable react/forbid-prop-types */
import React, { useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Navbar, Main, Footer } from 'components/Layout';
import { Dashboard } from 'components/Dashboard';
import CompanyLogo from 'assets/images/logo.jpg';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import styled from '@emotion/styled';
import { fetchConfig } from 'components/Hedging/store/reducers/hedgingReducer';
import NotFound from '../NotFound/NotFound';

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
`;
const App = ({ fetchConfigAction, config }) => {
  useEffect(() => {
    fetchConfigAction();
  }, []);

  const company = {
    name: 'FakeCompany',
    logo: CompanyLogo,
  };

  if (!config) return <span>Loader</span>;

  return (
    <Main>
      <Navbar company={company} />
      <Wrapper>
        <Suspense fallback={<></>}>
          <Switch>
            <Route
              exact
              path="/"
              render={router => <Dashboard {...router} />}
            />
            {Object.values(config.router).map(route => {
              return <RouteWithSubRoutes {...route} key={route.path} />;
            })}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Wrapper>
      <Footer />
    </Main>
  );
};

App.propTypes = {
  config: PropTypes.shape({
    entities: PropTypes.object,
    router: PropTypes.object,
    initNavMenu: PropTypes.arrayOf(PropTypes.string),
  }),
  fetchConfigAction: PropTypes.func.isRequired,
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
