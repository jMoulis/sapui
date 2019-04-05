import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BtnReset from './BtnReset';

const Button = styled(BtnReset)`
  label: Button;
  position: relative;
  ${({ theme }) => {
    return theme.buttons.regular;
  }}
  border-radius: ${({ circle }) => circle && '200px'};
  border-color: ${({ theme, action }) => {
    return theme.colors.status[action] || theme.colors.status.default;
  }};
  background-color: ${({ theme, action, isSelected, full }) => {
    if (full) return theme.colors.status[action] || theme.colors.status.default;
    return (
      isSelected && (theme.colors.status[action] || theme.colors.status.default)
    );
  }};
  color: ${({ theme, action, full }) => {
    if (full) return theme.colors.action.secondary;
    return theme.colors.status[action] || theme.colors.status.default;
  }};
  &:hover {
    border-color: ${({ theme, action }) =>
      theme.colors.status[action] || theme.colors.status.default};
    color: ${({ theme }) => theme.colors.action.secondary};
    background-color: ${({ theme, action }) =>
      theme.colors.status[action] || theme.colors.status.default};
  }
  &:active {
    border-color: ${({ theme, action }) =>
      theme.colors.status[action] || theme.colors.status.default};
    background-color: ${({ theme, action }) =>
      theme.colors.status[action] || theme.colors.status.default};
    box-shadow: 0 0 0 1px
      ${({ theme, action }) =>
        theme.colors.status[action] || theme.colors.status.default};
  }
  ${({ theme, isSelected }) => {
    return isSelected && { ...theme.buttons.actions['&:hover'] };
  }};
  ${({ full }) =>
    full && {
      '&::after': {
        content: '""',
        backgrounColor: 'rgba(255, 255, 255, 0)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'all 150ms ease-in',
      },
      '&:hover': {
        '&::after': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
      '&:active': {
        '&::after': {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        },
      },
    }}
`;

export const ButtonStory = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

ButtonStory.propTypes = {
  /** Actions available : success, danger, alert. null === normal */
  action: PropTypes.string,
  /** @bool largest button, icon and font size */
  lg: PropTypes.bool,
  /** @bool smallest button, icon and font size */
  xs: PropTypes.bool,
  /** @bool small button, icon and font size */
  sm: PropTypes.bool,
  /** @bool full painted */
  full: PropTypes.bool,
  /** @bool padding equal */
  square: PropTypes.bool,
  /** @bool round */
  circle: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ButtonStory.defaultProps = {
  action: 'normal',
  lg: false,
  xs: false,
  sm: false,
  full: false,
  square: false,
  circle: false,
  children: null,
};

export default Button;
