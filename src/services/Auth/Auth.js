import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';

function withAuthentication(WrappedComponent) {
  const WrappedComponentContainer = ({ isLogged, loggedUser, ...rest }) => {
    if (!isLogged) return <Redirect to="/signin" />;
    return <WrappedComponent {...rest} loggedUser={loggedUser} />;
  };

  const mapStateToProps = ({ authReducer }) => ({
    isLogged: authReducer.isLogged,
    loggedUser: authReducer.loggedUser,
  });

  WrappedComponentContainer.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    loggedUser: PropTypes.shape({
      fullName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }),
  };

  WrappedComponentContainer.defaultProps = {
    loggedUser: null,
  };

  return compose(
    withRouter,
    connect(
      mapStateToProps,
      null,
    ),
  )(WrappedComponentContainer);
}

export default withAuthentication;
