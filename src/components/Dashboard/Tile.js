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
`;

const Tile = ({ children, ...rest }) => {
  const [isDragging, setDrag] = useState(false);
  const handleDragStart = event => {
    setDrag(true);
    console.log(event.target.id);
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrag = event => {
    const data = event.dataTransfer.getData('text/plain');
  };

  const handleDragEnd = event => {
    setDrag(false);
    const data = event.dataTransfer.getData('text/html');
    console.log(data);
    // event.target.appendChild(document.getElementById(data));
  };

  const handleDrop = event => {
    // event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    console.log(data);
    console.log('drop');
    console.log(event.target);
    if (document.getElementById(data)) {
      event.target.appendChild(document.getElementById(data));
    }
  };
  return (
    <>
      <Root
        id="yo"
        draggable="true"
        onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        isDragging={isDragging}
        {...rest}
      >
        {children}
      </Root>
      <span
        id="drop"
        onDrop={handleDrop}
        onDragOver={event => {
          event.preventDefault();
          // Set the dropEffect to move
          console.log('hello');
          event.dataTransfer.dropEffect = 'move';
        }}
        style={{
          height: '20rem',
          width: '20rem',
          display: 'block',
          backgroundColor: 'black',
        }}
      />
    </>
  );
};

export default Tile;
