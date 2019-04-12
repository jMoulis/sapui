import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteWithSubRoutes } from 'services/routesConfigurator';

const HedgingPlants = ({ title, routes, datas, ...rest }) => {
  return (
    <>
      <Switch>
        {routes &&
          routes.map((route, i) => {
            return (
              <RouteWithSubRoutes
                key={i}
                config={rest}
                {...route}
                datas={datas}
              />
            );
          })}
      </Switch>
    </>
  );
};

export default HedgingPlants;
