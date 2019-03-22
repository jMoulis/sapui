import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

/** Button component description */
const DocgenButton = styled.button``;
export const DocgenButtonStory = props => <DocgenButton {...props} />;
DocgenButtonStory.defaultProps = {
  disabled: false,
  onClick: () => {},
  style: {},
};

DocgenButtonStory.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** button label. */
  label: PropTypes.string.isRequired,
  /** onClick handler */
  onClick: PropTypes.func,
  /** component styles */
  style: PropTypes.shape,
};

export default DocgenButton;
