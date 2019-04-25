/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Label = styled.span`
  flex: 1;
  font-size: 1.3rem;
  padding-left: 0.5rem;
  margin-top: -0.5rem;
  color: ${({ isEmail, theme }) => {
    if (!isEmail) return theme.colors.status.danger;
    return theme.colors.gray;
  }};
`;

const EmailValidator = ({ email, callback, error }) => {
  const { t } = useTranslation();
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  const isEmail = emailRegex.test(email);
  callback(isEmail);
  if (error || !email || isEmail) return null;
  if (!isEmail) {
    return <Label isEmail={isEmail}>{t('emailManager.invalid')}</Label>;
  }
};

EmailValidator.propTypes = {
  email: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default EmailValidator;
