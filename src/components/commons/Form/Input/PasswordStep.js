import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import ListPasswordHint from './ListPasswordHint';

const Root = styled.div`
  label: RootPasswordStep;
  padding: ${({ error }) => (error ? '1rem' : 0)} 0.5rem;
  border-radius: 2px;
`;

const Label = styled.span`
  flex: 1;
  font-size: 1.3rem;
  color: ${({ strong, medium, weak, theme }) => {
    if (strong) return theme.colors.status.success;
    if (medium) return theme.colors.status.alert;
    if (weak) return theme.colors.status.danger;
    return theme.colors.gray;
  }};
`;

const PasswordStep = ({ value, callback, error }) => {
  const { t } = useTranslation();
  const strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>;])(?=.{8,})',
  );
  const mediumRegex = new RegExp(
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
  );
  const strong = strongRegex.test(value);
  const medium = mediumRegex.test(value);
  const weak = !strong && !medium && value;
  let labelValue = null;
  if (strong) {
    labelValue = t('passwordHints.strong');
    callback(true);
  } else if (medium) {
    labelValue = t('passwordHints.medium');
    callback('medium');
  } else if (value) {
    labelValue = t('passwordHints.weak');
    callback(false);
  }
  return (
    <Root error={error}>
      <Label strong={strong} medium={medium} weak={weak}>
        {`${t('passwordHints.pwdStrength')}: ${value ? labelValue : ''}`}
      </Label>

      <ListPasswordHint
        value={value}
        strong={strong}
        medium={medium}
        weak={weak}
      />
    </Root>
  );
};

PasswordStep.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  error: PropTypes.string,
};

PasswordStep.defaultProps = {
  error: null,
};
export default PasswordStep;
