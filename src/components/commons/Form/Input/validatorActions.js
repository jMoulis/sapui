import React from 'react';
import PropTypes from 'prop-types';
import ComparePassword from './ComparePassword';
import PasswordStep from './PasswordStep';
import EmailValidator from './EmailValidator';

export const validatorsActions = {
  comparedValue: props => {
    const { validator, value, callback } = props;
    return (
      <ComparePassword
        key="comparePassword"
        password={validator.comparedValue}
        repeatPassword={value}
        callback={callback}
      />
    );
  },
  passwordStrength: ({ value, callback, error, ...rest }) => {
    return (
      <PasswordStep
        key="paswwordStep"
        value={value}
        callback={callback}
        error={error}
        {...rest}
      />
    );
  },
  emailValidation: ({ value, callback, ...rest }) => {
    return <EmailValidator email={value} callback={callback} {...rest} />;
  },
};

validatorsActions.comparedValue.propTypes = {
  validator: PropTypes.shape({
    keyValidator: PropTypes.string,
    comparedValue: PropTypes.string,
  }),
  value: PropTypes.string,
  callback: PropTypes.func.isRequired,
};
validatorsActions.comparedValue.defaultProps = {
  validator: null,
  value: null,
};
validatorsActions.passwordStrength.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func.isRequired,
};
validatorsActions.passwordStrength.defaultProps = {
  value: null,
};
