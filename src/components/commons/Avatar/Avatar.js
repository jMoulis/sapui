import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  background: url(${({ img }) => img});
  width: ${({ size }) => size || '4rem'};
  height: ${({ size }) => size || '4rem'};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const Avatar = ({ img }) => {
  return <Root img={img} />;
};

export default Avatar;
