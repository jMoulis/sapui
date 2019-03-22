import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem;
`;

Title.propTypes = {
  value: PropTypes.string,
};

export default Title;
