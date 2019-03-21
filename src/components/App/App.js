/* eslint-disable react/forbid-prop-types */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from 'components/Layout/Navbar';
import Main from 'components/Layout/Main';
import { Dashboard } from 'components/Dashboard';
import applications from 'components/Dashboard/applications';
import CompanyLogo from 'assets/images/logo.jpg';

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

// eslint-disable-next-line no-unused-vars
function setTitle(pathame) {
  const appPath = pathame.split('/')[1];
  return applications.find(application => {
    return application.path === `/${appPath}`;
  });
}

// eslint-disable-next-line no-unused-vars
const App = ({ location: { pathname } }) => {
  // const appTitle = setTitle(pathname);
  const company = {
    name: 'FakeCompany',
    logo: CompanyLogo,
  };
  return (
    <Main>
      <Navbar company={company} />
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

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(App);
