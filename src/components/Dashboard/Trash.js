import React from 'react';
import styled from '@emotion/styled';
import { AnimationCore } from 'components/commons/animations';

const Root = styled(AnimationCore)`
  height: 17.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.status.danger};
  width: 20rem;
`;

const Trash = ({ sourceItem, removeItem }) => {
  const handleDrop = () => {
    removeItem({ source: sourceItem });
  };
  return (
    <Root
      draggable
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
      animation="slideUp"
    >
      <Content>Trash</Content>
    </Root>
  );
};

export default Trash;
