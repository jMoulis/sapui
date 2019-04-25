import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Label = styled.span`
  flex: 1;
  font-size: 1rem;
  padding-left: 0.5rem;
`;

const ComparePassword = ({ password, repeatPassword, callback }) => {
  if (!password) return null;
  if (!password || !repeatPassword) {
    callback(false);
    return null;
  }
  if (password === repeatPassword) {
    callback(true);
  }
  return (
    <>
      {password === repeatPassword ? <Label>Done</Label> : <Label>Nope</Label>}
    </>
  );
};

ComparePassword.propTypes = {
  password: PropTypes.string,
  repeatPassword: PropTypes.string,
};

ComparePassword.defaultProps = {
  password: null,
  repeatPassword: null,
};

export default ComparePassword;
