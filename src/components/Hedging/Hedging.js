import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { NavLink, Switch } from 'react-router-dom';
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
  location,
  routes,
  fetchConfigAction,
  loading,
  config,
  fetchNavigationAction,
  navQuery,
  history,
}) => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [rootUrl, setRootUrl] = useState('');
  if (loading) return <Loader />;
  if (!config) return <Loader />;
  useEffect(() => {
    const entity = location.pathname.split();
    console.log(config);
    // fetchNavigationAction(location.pathname);
  }, [location.pathname]);
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
      </LeftPanel>
      <Body>
        <Navigation
          config={config}
          callback={fetchNavigationAction}
          setRootUrl={setRootUrl}
          rootUrl={rootUrl}
          navQuery={navQuery}
        />
        <Switch>
          {config.router.hedging.routes.map((route, i) => {
            return (
              <RouteWithSubRoutes
                key={i}
                config={config}
                {...route}
                callback={fetchNavigationAction}
                datas={navQuery.datas}
              />
            );
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
