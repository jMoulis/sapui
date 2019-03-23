import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { FlexBox } from 'components/Layout';
import ListCategories from './ListCategories';

const bigSize = true;

const CategoryApp = ({ routes }) => {
  const [displayCategory, setCatVisibility] = useState(true);
  return (
    <>
      <FlexBox css={{ position: 'relative' }}>
        {!bigSize ? displayCategory && <ListCategories /> : <ListCategories />}
        <Switch>
          {/* <Route
            exact
            path="/exo"
            render={() => <FlexBox css={{ flex: 1 }}>Tets</FlexBox>}
          /> */}
          {routes.map((route, i) => (
            <RouteWithSubRoutes
              key={i}
              {...route}
              callback={setCatVisibility}
            />
          ))}
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

export default CategoryApp;
