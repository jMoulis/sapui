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
import { FlexBox } from 'components/Layout';
import RouterStorage from 'services/RouterStorage';
import { Icon } from 'components/commons/Icons';
import NavigationListItem from './NavigationListItem';

const Label = styled.span`
  width: ${({ shouldCollapsed }) => shouldCollapsed && 0};
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
  shouldCollapsed,
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

  const loadDetail = () => {
    // Call Api
  };

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
  // if (navQuery.loading) return <Loader />;
  return (
    <List>
      {shouldDisplayFetchedDatas
        ? navQuery.datas.map((data, i) => {
            const { icon } = config.entities[data.displayedEntity];
            const shouldDisplayTextAsARouterLink = !!data.navigation;
            const LinkToPath = `${location.pathname}/${helpers.slugify(
              data.name || data._id,
            )}`;

            if (shouldDisplayTextAsARouterLink) {
              return (
                <NavigationListItem
                  shouldCollapsed={shouldCollapsed}
                  key={i}
                  path={LinkToPath}
                  label={data.name || data._id}
                  icon={icon}
                  callback={() => {
                    routerStorage.addToRouter({
                      [LinkToPath]: {
                        name: data.name || data._id,
                        api: data.navigation,
                        route: LinkToPath,
                      },
                    });
                  }}
                />
              );
            }
            return (
              <ListItemCustom key={i}>
                <FlexBox css={{ overflow: 'hidden', padding: '1rem' }}>
                  <Icon
                    css={{
                      paddingRight: '1rem',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />
                  <Label shouldCollapsed={shouldCollapsed}>
                    {data.name || data._id}
                  </Label>
                </FlexBox>
                {/* <Text
                  onClick={() => loadDetail()}
                  title={data.name || data._id}
                >
                  {data.name || data._id}
                </Text> */}
              </ListItemCustom>
            );
          })
        : config.router.hedging.routes.map((route, i) => {
            const { icon } = config.entities[route.collection];
            return (
              <NavigationListItem
                key={i}
                path={route.path}
                shouldCollapsed={shouldCollapsed}
                icon={icon}
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
  shouldCollapsed: PropTypes.bool.isRequired,
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
