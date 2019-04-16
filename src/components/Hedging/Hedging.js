import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Switch } from 'react-router-dom';
import { Loader } from 'components/commons/Loader';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { connect } from 'react-redux';
import { fetchNavigation } from 'store/reducers/navigationReducer';
import { BreadCrumb } from 'components/BreadCrumb';

const Body = styled.section`
  flex: 1;
  padding: 1rem;
  grid-area: main;
`;

const Hedging = ({ loading, config, fetchNavigationAction, navQuery }) => {
  if (loading || !config) return <Loader />;
  const appName = 'hedging';
  return (
    <Body>
      <BreadCrumb
        home={{
          uri: appName,
          name: 'home',
        }}
      />
      <Switch>
        {config.router[appName].routes.map((route, i) => {
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
  );
};

Hedging.propTypes = {
  loading: PropTypes.bool.isRequired,
  config: PropTypes.shape({
    entities: PropTypes.object,
    router: PropTypes.object,
    initNavMenu: PropTypes.arrayOf(PropTypes.string),
  }),
  fetchNavigationAction: PropTypes.func.isRequired,
  navQuery: PropTypes.shape({
    error: PropTypes.string,
    datas: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
  }).isRequired,
};

Hedging.defaultProps = {
  config: null,
};

const mapStateToProps = ({ hedgingReducer, navigationReducer }) => ({
  loading: hedgingReducer.loading,
  config: hedgingReducer.config,
  navQuery: navigationReducer.navQuery,
});

const mapDispatchToProps = dispatch => ({
  fetchNavigationAction: entity => {
    dispatch(fetchNavigation(entity));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hedging);
