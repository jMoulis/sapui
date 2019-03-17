import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0
  }
`;

const Root = styled.div`
  label: ModalRoot;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${({ displayStatus }) =>
    displayStatus === 'closing' ? fadeOut : fadeIn};
  animation-timing-function: ease-in;
  animation-duration: 300ms;
`;

const Modal = ({ children, show }) => {
  const [displayStatus, setDisplayStatus] = useState('closed');
  const [prevShow, setPrevShow] = useState(false);

  useEffect(() => {
    let timer = null;
    const wasOpen = prevShow && !show;
    setPrevShow(show);
    if (wasOpen) {
      setDisplayStatus('closing');
      timer = setTimeout(() => {
        setDisplayStatus('closed');
      }, 300);
    } else if (show) {
      setDisplayStatus('show');
    }
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  if (displayStatus === 'closed') return null;

  return createPortal(
    <Root displayStatus={displayStatus}>{children}</Root>,
    document.body,
  );
};

export default Modal;
