/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from 'components/Layout/Navbar';
import Main from 'components/Layout/Main';
import { Dashboard } from 'components/Dashboard';
import CompanyLogo from 'assets/images/logo.jpg';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { fetchConfig } from '../Hedging/store/reducers/hedgingReducer';
import NotFound from '../NotFound/NotFound';

const App = ({ fetchConfigAction, loading, config, match }) => {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    fetchConfigAction();
  }, []);

  useEffect(() => {
    if (config && !loading) {
      const renderRoute = () => {
        try {
          Object.values(config.router).map(value => {
            setRoutes(prevRoutes => [
              ...prevRoutes,
              {
                ...value,
              },
            ]);
          });
        } catch (error) {
          console.error(error);
        }
      };
      renderRoute();
    }
  }, [config, match]);

  const company = {
    name: 'FakeCompany',
    logo: CompanyLogo,
  };
  if (loading) return <span>Loader</span>;
  if (!config) return <span>Loader</span>;

  return (
    <Main>
      <Navbar company={company} />
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" render={router => <Dashboard {...router} />} />
          {Object.values(config.router).map(route => {
            console.log('go To route', route);
            return <RouteWithSubRoutes {...route} key={route.path} />;
          })}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Main>
  );
};

App.propTypes = {
  location: PropTypes.object.isRequired,
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
