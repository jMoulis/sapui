import React from 'react';
import { Link } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../services/routesConfigurator';

const Appli2 = ({ match, routes }) => {
  return (
    <>
      <h1>Alli 2</h1>
      <Link to={`${match.url}/test`}>Test</Link>
      <Link to={`${match.url}/test2`}>Test</Link>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </>
  );
};

export default Appli2;
