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
} from 'store/reducers/navigationReducer';
import { addToBreadcrumb } from 'store/reducers/hedgingReducer';
import { FlexBox } from 'components/commons/FlexBox';
import RouterStorage from 'services/RouterStorage';
import NavigationListItem from './NavigationListItem';

const Root = styled(List)`
  label: Navigation;
`;

const Label = styled.span`
  width: ${({ collapsed }) => collapsed && 0};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 300ms ease;
`;

const ListItemCustom = styled(ListItem)`
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const Navigation = ({
  config,
  fetchNavigationAction,
  navQuery,
  location,
  resetNavigationAction,
  addToBreadcrumbAction,
  collapsed,
  toggle,
  ...rest
}) => {
  const helpers = new Helpers();
  const routerStorage = new RouterStorage('router');

  useEffect(() => {
    const router = routerStorage.getRouter();
    if (router) {
      const route = router[location.pathname];
      if (route) {
        fetchNavigationAction({
          query: route.query,
          keyQuery: route.keyQuery,
        });

        addToBreadcrumbAction(router, location.pathname);
      } else {
        resetNavigationAction();
      }
    }
  }, [location.pathname]);

  const shouldDisplayFetchedDatas =
    navQuery.datas && Array.isArray(navQuery.datas);

  const emptyData =
    !navQuery.error &&
    !navQuery.loading &&
    navQuery.datas &&
    navQuery.datas.length === 0;

  if (emptyData) {
    return (
      <List>
        <ListItemCustom>No data found</ListItemCustom>
      </List>
    );
  }

  return (
    <Root {...rest}>
      {shouldDisplayFetchedDatas
        ? navQuery.datas.map((data, i) => {
            // const { icon } = config.entities[data.displayedEntity];
            const shouldDisplayTextAsARouterLink = !!data.query;
            const LinkToPath = `${location.pathname}/${helpers.slugify(
              data.name || data._id,
            )}`;

            if (shouldDisplayTextAsARouterLink) {
              return (
                <NavigationListItem
                  collapsed={collapsed}
                  key={i}
                  path={LinkToPath}
                  label={data.name || data._id}
                  // icon={icon}
                  callback={() => {
                    if (collapsed) return toggle();
                    routerStorage.addToRouter({
                      [LinkToPath]: {
                        name: data.name || data._id,
                        query: data.query,
                        route: LinkToPath,
                        keyQuery: data.keyQuery,
                      },
                    });
                  }}
                />
              );
            }
            return (
              <ListItemCustom key={i}>
                <FlexBox css={{ overflow: 'hidden', padding: '1rem' }}>
                  {/* <Icon icon="products" /> */}
                  <Label collapsed={collapsed}>{data.name || data._id}</Label>
                </FlexBox>
              </ListItemCustom>
            );
          })
        : config.app.routes.map((route, i) => {
            const { icon } = config.entities[route.keyQuery];
            return (
              <NavigationListItem
                key={i}
                path={route.path}
                collapsed={collapsed}
                icon={icon}
                callback={() => {
                  routerStorage.addToRouter({
                    [`${route.path}`]: {
                      name: route.title,
                      query: route.query,
                      route: route.path,
                      get: route.query,
                      keyQuery: route.keyQuery,
                    },
                  });
                }}
                label={route.title}
              />
            );
          })}
    </Root>
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
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
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
  fetchNavigationAction: ({ query, keyQuery }) => {
    dispatch(fetchNavigation({ query, keyQuery }));
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
