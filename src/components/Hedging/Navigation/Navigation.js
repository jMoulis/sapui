import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Helpers from 'services/Helpers';
import { List, ListItem } from 'components/commons/List';
import {
  fetchNavigation,
  resetNavigation,
} from 'components/Hedging/store/reducers/navigationReducer';
import { addToBreadcrumb } from 'components/Hedging/store/reducers/hedgingReducer';
import RouterStorage from 'services/RouterStorage';
import NavigationListItem from './NavigationListItem';

const Text = styled.span`
  display: block;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListItemCustom = styled(ListItem)`
  // width: 20rem;
`;

const Navigation = ({
  config,
  fetchNavigationAction,
  navQuery,
  location,
  resetNavigationAction,
  addToBreadcrumbAction,
  isCollapse,
}) => {
  const helpers = new Helpers();
  const routerStorage = new RouterStorage('router');

  useEffect(() => {
    const router = routerStorage.getRouter();
    if (router) {
      const route = router[location.pathname];
      if (route) {
        fetchNavigationAction(route.api);
        addToBreadcrumbAction(router, location.pathname);
      } else {
        resetNavigationAction();
      }
    }
  }, [location.pathname]);

  const shouldDisplayFetchedDatas =
    navQuery.datas && Array.isArray(navQuery.datas);

  return (
    <List>
      {shouldDisplayFetchedDatas
        ? navQuery.datas.map((route, i) => {
            const shouldDisplayTextAsARouterLink = !!route.navigation;
            const LinkToPath = `${location.pathname}/${helpers.slugify(
              route.name || route._id,
            )}`;
            if (shouldDisplayTextAsARouterLink) {
              return (
                <NavigationListItem
                  isCollapse={isCollapse}
                  key={i}
                  path={LinkToPath}
                  label={route.name || route._id}
                  callback={() => {
                    routerStorage.addToRouter({
                      [LinkToPath]: {
                        name: route.name || route._id,
                        api: route.navigation,
                        route: LinkToPath,
                      },
                    });
                  }}
                />
              );
            }
            return (
              <ListItemCustom key={i}>
                <Text title={route.name || route._id}>
                  {route.name || route._id}
                </Text>
              </ListItemCustom>
            );
          })
        : config.router.hedging.routes.map((route, i) => {
            return (
              <NavigationListItem
                key={i}
                path={route.path}
                isCollapse={isCollapse}
                callback={() => {
                  routerStorage.addToRouter({
                    [`${route.path}`]: {
                      name: route.title,
                      api: route.uri,
                      route: route.path,
                    },
                  });
                }}
                label={route.title}
              />
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
  addToBreadcrumbAction: PropTypes.func.isRequired,
  navQuery: PropTypes.shape({
    error: PropTypes.string,
    datas: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
  }).isRequired,
  location: PropTypes.object.isRequired,
  isCollapse: PropTypes.bool.isRequired,
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
  addToBreadcrumbAction: (value, route) => {
    dispatch(addToBreadcrumb(value, route));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Navigation),
);
