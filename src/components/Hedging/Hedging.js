import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, Switch } from 'react-router-dom';
import { Loader } from 'components/commons/Loader';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { connect } from 'react-redux';
import { fetchConfig } from './store/reducers/hedgingReducer';
import { fetchNavigation } from './store/reducers/navigationReducer';
import Navigation from './Navigation';

const BreadCrumbs = styled.nav``;
const LeftPanel = styled.aside``;
const Body = styled.section``;
const Footer = styled.footer``;

const Hedging = ({
  match,
  routes,
  fetchConfigAction,
  loading,
  config,
  fetchNavigationAction,
  navQuery,
}) => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  if (loading) return <Loader />;
  if (!config) return <Loader />;
  return (
    <>
      <BreadCrumbs>
        <ul>
          {breadCrumbs.map(crumb => (
            <li>{crumb.label}</li>
          ))}
        </ul>
      </BreadCrumbs>
      <LeftPanel>
        <label>Date de calcul</label>
        <select>
          <option>31.05.2018</option>
        </select>
        <ul>
          {config.router.hedging.routes.map(route => (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </LeftPanel>
      <Body>
        <Switch>
          {config.router.hedging.routes.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />;
          })}
        </Switch>
      </Body>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ hedgingReducer, navigationReducer }) => ({
  loading: hedgingReducer.loading,
  config: hedgingReducer.config,
  navQuery: navigationReducer.navQuery,
});

const mapDispatchToProps = dispatch => ({
  fetchConfigAction: () => {
    dispatch(fetchConfig());
  },
  fetchNavigationAction: entity => {
    dispatch(fetchNavigation(entity));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hedging);
