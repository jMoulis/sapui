import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { FlexBox } from 'components/Layout';
import ListCategories from './ListCategories';
import { resetCategories } from '../../store/reducers/categoryReducer';

const bigSize = true;

const CategoryApp = ({ routes, match, resetCategoriesAction }) => {
  const [displayCategory, setCatVisibility] = useState(true);
  useEffect(() => {
    return () => resetCategoriesAction();
  });
  return (
    <>
      <FlexBox css={{ position: 'relative' }}>
        {!bigSize ? displayCategory && <ListCategories /> : <ListCategories />}
        <Switch>
          {routes.map((route, i) => {
            return (
              <RouteWithSubRoutes
                key={i}
                {...route}
                path={`${match.path}${route.path}`}
                callback={setCatVisibility}
              />
            );
          })}
        </Switch>
      </FlexBox>
    </>
  );
};

CategoryApp.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

CategoryApp.defaultProps = {
  routes: [],
};

const mapDispatchToProps = dispatch => ({
  resetCategoriesAction: () => {
    dispatch(resetCategories());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(CategoryApp);
