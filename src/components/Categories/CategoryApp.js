import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ListCategories from './ListCategories';
import { RouteWithSubRoutes } from '../../services/routesConfigurator';

const Flex = styled.div`
  label: CategoryApp;
  display: flex;
  flex: 1;
`;

const CategoryApp = ({ routes }) => {
  const [displayCategory, setCatVisibility] = useState(true);
  return (
    <Flex>
      {displayCategory && <ListCategories />}
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} callback={setCatVisibility} />
      ))}
    </Flex>
  );
};

CategoryApp.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

CategoryApp.defaultProps = {
  routes: [],
};

export default CategoryApp;
