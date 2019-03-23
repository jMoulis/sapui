import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const zoom = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0.4);
  }
  40% {
    transform: scale(1);
  }
`;

const after = keyframes`
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;

const before = keyframes`
   0%,
  80%,
  100% {
    opacity: 1;
  }
  40% {
    opacity: 0.1;
  }

`;
const Dot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  display: block;
  position: relative;
  animation: ${zoom} 1.8s infinite ease-in-out ${({ delay }) => delay || 0}ms;
  &:after {
    content: '';
    opacity: 1;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    animation: ${after} 1.8s infinite ease-in-out;
    box-shadow: inset 0 0 2px 1px #00a4eb;
    box-shadow: inset 0 0 2px 1px rgba(66, 124, 172, 0.8);
  }
  &:before {
    content: '';
    opacity: 1;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    animation: ${before} 1.8s infinite ease-in-out;
    background: #00a4eb;
  }
`;

const Root = styled.div`
  border: none;
  position: absolute;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(250, 250, 250, 0.72);
`;

const Loader = () => {
  return (
    <Root>
      <Dot />
      <Dot delay={200} />
      <Dot delay={400} />
    </Root>
  );
};

export default Loader;
