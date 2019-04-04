import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({
  config,
  callback,
  setRootUrl,
  rootUrl,
  navQuery,
  location,
}) => {
  return navQuery.datas ? (
    <ul>
      {navQuery.datas.map((route, i) => {
        return (
          <Link
            to={`${rootUrl}/${route.Name}`}
            onClick={() => {
              callback(route.uri);
            }}
          >
            {route.Name}
          </Link>
        );
      })}
    </ul>
  ) : (
    <ul>
      {config.router.hedging.routes.map((route, i) => {
        return (
          <Link
            to={route.path}
            onClick={() => {
              callback(route.uri);
              return setRootUrl(route.path);
            }}
          >
            {route.title}
          </Link>
        );
      })}
    </ul>
  );
};

export default Navigation;
