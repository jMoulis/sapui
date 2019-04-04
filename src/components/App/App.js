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
import axios from 'axios';

const App = ({ fetchConfigAction, loading, config, match }) => {
  useEffect(() => {
    fetchConfigAction();
  }, []);

  const company = {
    name: 'FakeCompany',
    logo: CompanyLogo,
  };
  if (loading) return <span>Loader</span>;
  if (!config) return <span>Loader</span>;

  return (
    <Main>
      <Navbar company={company} />
      <button
        type="button"
        onClick={() => {
          axios({
            method: 'POST',
            url: '/api/v1/plants',
            data: { name: 'Dépôt 2' },
          }).then(response => console.log(response));
        }}
      >
        Add plant
      </button>
      <button
        type="button"
        onClick={() => {
          axios({
            method: 'PATCH',
            url: '/api/v1/plants/5ca459ed6ad238080a4e391a',
            data: { name: 'Dépôt 4' },
          }).then(response => console.log(response));
        }}
      >
        Edit plant
      </button>
      <button
        type="button"
        onClick={() => {
          axios({
            method: 'DELETE',
            url: '/api/v1/plants/5ca459ed6ad238080a4e391a',
          }).then(response => console.log(response));
        }}
      >
        Delete plant
      </button>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" render={router => <Dashboard {...router} />} />
          {Object.values(config.router).map(route => {
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
