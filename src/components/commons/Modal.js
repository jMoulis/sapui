import React from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

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
`;

const Modal = ({ children }) => {
  return createPortal(<Root>{children}</Root>, document.body);
};

export default Modal;
