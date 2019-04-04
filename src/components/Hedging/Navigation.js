import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Helpers from 'services/Helpers';
import { List } from 'components/commons/List';
import {
  fetchNavigation,
  resetNavigation,
} from './store/reducers/navigationReducer';

const addToRouter = object => {
  const actualRouter = localStorage.getItem('router');
  let newRouter = { ...object };
  if (actualRouter) {
    const parsedActualRouter = JSON.parse(actualRouter);
    newRouter = {
      ...parsedActualRouter,
      ...object,
    };
  }
  localStorage.setItem('router', JSON.stringify(newRouter));
};

const getRouter = router => {
  const actualRouter = localStorage.getItem(router);
  if (actualRouter) return JSON.parse(actualRouter);
  return null;
};

const removeFromRouter = key => {
  const actualRouter = getRouter('router');

  const newRouter = Object.keys(actualRouter).reduce((router, route) => {
    if (route !== key) {
      return {
        ...router,
        [route]: actualRouter[route],
      };
    }
    return router;
  }, {});
  localStorage.setItem('router', JSON.stringify(newRouter));
};

const ListItem = styled.li`
  padding: 1rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const Navigation = ({
  config,
  fetchNavigationAction,
  navQuery,
  location,
  resetNavigationAction,
}) => {
  const helpers = new Helpers();

  useEffect(() => {
    const router = getRouter('router');
    if (router) {
      const routeApi = router[location.pathname];
      if (routeApi) {
        fetchNavigationAction(routeApi);
      } else {
        resetNavigationAction();
      }
    }
  }, [location.pathname]);

  return (
    <List>
      {navQuery.datas && Array.isArray(navQuery.datas)
        ? navQuery.datas.map((route, i) => {
            if (route.navigation) {
              return (
                <ListItem>
                  <Link
                    key={i}
                    to={`${location.pathname}/${helpers.slugify(
                      route.name || route._id,
                    )}`}
                    onClick={() => {
                      addToRouter({
                        [`${location.pathname}/${helpers.slugify(
                          route.name || route._id,
                        )}`]: route.navigation,
                      });
                    }}
                  >
                    {route.name || route._id}
                  </Link>
                </ListItem>
              );
            }
            return (
              <ListItem>
                <span key={i}>{route.name || route._id}</span>
              </ListItem>
            );
          })
        : config.router.hedging.routes.map((route, i) => {
            return (
              <Link
                key={i}
                to={route.path}
                onClick={() => {
                  addToRouter({
                    [`${route.path}`]: route.uri,
                  });
                }}
              >
                {route.title}
              </Link>
            );
          })}
    </List>
  );
};

Navigation.propTypes = {
  config: PropTypes.shape({
    entities: PropTypes.object,
    router: PropTypes.object,
    initNavMenu: PropTypes.arrayOf(PropTypes.string),
  }),
  fetchNavigationAction: PropTypes.func.isRequired,
  resetNavigationAction: PropTypes.func.isRequired,
  navQuery: PropTypes.shape({
    error: PropTypes.string,
    datas: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

Navigation.defaultProps = {
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
  resetNavigationAction: () => {
    dispatch(resetNavigation());
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Navigation),
);
