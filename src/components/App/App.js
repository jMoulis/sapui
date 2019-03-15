import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from 'components/Layout/Navbar';
import Main from 'components/Layout/Main';
import Dashboard from 'components/Dashboard/Dashboard';
import applications from '../Dashboard/applications';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => {
        return <route.component {...props} {...route} />;
      }}
    />
  );
}

function setTitle(pathame) {
  const appPath = pathame.split('/')[1];
  return applications.find(application => {
    return application.path === `/${appPath}`;
  });
}

const App = ({ location: { pathname } }) => {
  const appTitle = setTitle(pathname);
  return (
    <Main>
      <Navbar activeAppTitle={appTitle && appTitle.title} />
      <Switch>
        <Suspense fallback={<></>}>
          <Route exact path="/" render={router => <Dashboard {...router} />} />
          {applications.map(application => {
            return (
              <RouteWithSubRoutes {...application} key={application.path} />
            );
          })}
        </Suspense>
      </Switch>
    </Main>
  );
};

export default withRouter(App);
