/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import eye from 'assets/icons/eye.svg';
import eyeClose from 'assets/icons/eye-slash.svg';
import Wrapper from './InputWrapper';
import { validatorsActions } from './validatorActions';
import Label from './Label';
import Help from './Help';

const Root = styled.div`
  label: InputRoot;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.5rem 0;
`;

const InputStyled = styled.input`
  display: block;
  border: none;
  padding: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  height: 5rem;
  transition: all 250ms ease-in;
  box-shadow: ${({ theme, focusState }) => {
    if (focusState) return `0 0 5px 1px rgba(${theme.colors.rgba.gray}, 0.2)`;
  }};
  background-color: ${({ disabled, theme }) =>
    disabled
      ? `rgba(${theme.colors.rgba.gray}, 0.2)`
      : `rgba(${theme.colors.rgba.gray}, 0.1)`};
`;

const Error = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  position: absolute;
  bottom: -1.4rem;
  color: ${({ theme }) => theme.colors.status.danger};
`;

const ShowPassword = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
`;

const InputWrapper = styled(Wrapper)`
  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${({
      isValid,
      focusState,
      theme,
      value,
      validation,
      error,
    }) => {
      if (!validation) return null;
      if (!isValid || error) return theme.colors.status.danger;
      if (isValid === 'medium') return theme.colors.status.alert;
      if (isValid && !!value) return theme.colors.status.success;
      if (value === '' || !focusState) return null;
    }};
  }
`;

const Eye = styled.img`
  height: 2rem;
`;

const Input = ({
  id,
  type,
  label,
  name,
  help,
  onChange,
  validators,
  value,
  placeholder,
  disabled,
  errorCallback,
  error,
  isFormTypeChanged,
  showPassword,
  focus,
  ...rest
}) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const [focusState, handleFocus] = useState(false);
  const [passwordInputType, handleShowPassword] = useState(type);
  const [isValid, setValidation] = useState(true);
  // const [isCapLock, setCapLock] = useState(false);

  const handleKeyUp = event => {
    if (event.getModifierState('CapsLock')) {
      // return setCapLock(true);
    }
    // return setCapLock(false);
  };

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isFormTypeChanged) {
      setValidation(true);
    }
  }, [isFormTypeChanged]);

  return (
    <Root {...rest}>
      <Label
        focused={focusState || value}
        disabled={disabled}
        onClick={() => {
          inputRef.current.focus();
          handleFocus(true);
        }}
      >
        {label}
      </Label>
      <InputWrapper
        isValid={isValid}
        error={error}
        focusState={focusState}
        value={value}
        validation={validators}
      >
        <InputStyled
          ref={inputRef}
          type={passwordInputType || type}
          name={name}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          onKeyUp={handleKeyUp}
          onChange={({ target }) => {
            if (onChange) {
              onChange({ [name]: target.value });
            }
          }}
          value={value}
          onFocus={() => {
            handleFocus(true);
          }}
          onBlur={() => {
            if (errorCallback) {
              errorCallback(!isValid && { [name]: isValid });
            }
            handleFocus(false);
          }}
          focusState={focusState}
        />
        {error && <Error>{error}</Error>}
      </InputWrapper>
      {/* isCapLock && <span>Caps On</span> */}

      {type === 'password' && showPassword && (
        <ShowPassword
          title={t(
            passwordInputType === 'password' ? 'showPassword' : 'hidePassword',
          )}
          onClick={() =>
            handleShowPassword(
              passwordInputType === 'text' ? 'password' : 'text',
            )
          }
        >
          {passwordInputType === 'text' ? (
            <Eye src={eyeClose} alt={t('hidePassword')} />
          ) : (
            <Eye src={eye} alt={t('showPassword')} />
          )}
        </ShowPassword>
      )}

      <>
        {validators &&
          validators.map((validator, key) => {
            if (
              typeof validatorsActions[validator.keyValidator] === 'function'
            ) {
              return validatorsActions[validator.keyValidator]({
                key,
                validator,
                value: value,
                callback: setValidation,
                error,
                ...validator,
              });
            }
            return null;
          })}
      </>
      {help && <Help>{help}</Help>}
    </Root>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  help: PropTypes.string,
  validators: PropTypes.arrayOf(
    PropTypes.shape({
      keyValidator: PropTypes.string,
      comparedValue: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
  errorCallback: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isFormTypeChanged: PropTypes.string,
  showPassword: PropTypes.bool,
  focus: PropTypes.bool,
};

Input.defaultProps = {
  id: '',
  type: 'text',
  help: '',
  validators: null,
  label: null,
  onChange: null,
  errorCallback: null,
  placeholder: null,
  disabled: null,
  error: null,
  isFormTypeChanged: null,
  showPassword: null,
  focus: null,
  value: '',
};

export default Input;
