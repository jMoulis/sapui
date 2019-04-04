import React from 'react';
import { Route } from 'react-router-dom';

const DynamicComponent = value => {
  try {
    const Module = React.lazy(() =>
      import(`../components/${value.componentPath}.js`),
    );
    return <Module {...value} />;
  } catch (error) {
    console.error('Dynamic import', error.message);
  }
};

export function RouteWithSubRoutes(route) {
  return (
    <Route
      {...route}
      path={route.path}
      routes={route.routes}
      component={router => DynamicComponent({ ...router, ...route })}
    />
  );
}
