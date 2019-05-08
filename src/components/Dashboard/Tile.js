import React, { useState } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  label: Tile;
  margin: 0.5rem;
  cursor: pointer;
  grid-column: 1;
  ${({ theme, gridArea, position }) => {
    return {
      [theme.mediaQueries.sm]: {
        gridColumn: position && position.gridColumn,
        gridRow: position && position.gridRow,
        gridArea,
      },
    };
  }};
  ${({ isDragging }) =>
    isDragging && {
      transform: 'rotate(5deg)',
    }}

  overflow: hidden;
  position: relative;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.backgrounds.background2};
  transition: all 150ms ease-in;
  &:hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
  ${({ isDragOver, theme }) => {
    return isDragOver
      ? { backgroundColor: 'gray' }
      : theme.colors.backgrounds.background2;
  }}
`;

const Tile = ({ children, id, ...rest }) => {
  const [isDragging, setDrag] = useState(false);
  const [isDragOver, setDragOver] = useState(false);
  const handleDragStart = event => {
    setDrag(true);
    event.dataTransfer.setData('text/plain', 'event.target.id');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrag = event => {
    const data = event.dataTransfer.getData('text/plain');
  };

  const handleDragEnd = event => {
    console.log('done');
    setDrag(false);
    // event.target.appendChild(document.getElementById(data));
  };

  return (
    <>
      <Root
        id={`root-${id}`}
        draggable="true"
        onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        isDragging={isDragging}
        isDragOver={isDragOver}
        onDrop={() => console.log('drop')}
        onDragOver={() => setDragOver(true)}
        onDragLeave={() => {
          setDragOver(false);
        }}
        {...rest}
      >
        {children || '+'}
      </Root>
    </>
  );
};

export default Tile;
