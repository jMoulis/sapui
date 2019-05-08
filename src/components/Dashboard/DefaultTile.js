import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  label: Tile;
  margin: 0.5rem;
  cursor: pointer;
  grid-column: 1;
  ${({ theme, position }) => {
    return {
      [theme.mediaQueries.sm]: {
        ...position,
      },
    };
  }};
  overflow: hidden;
  position: relative;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
  ${({ isDragOver, theme }) => {
    return isDragOver
      ? {
          backgroundColor: theme.colors.backgrounds.background1,
          transition: 'all 150ms ease-in',
        }
      : { backgroundColor: theme.colors.backgrounds.background2 };
  }}
`;

const DefaultTile = ({
  children,
  callback,
  position,
  item,
  setSource,
  itemSource,
  ...rest
}) => {
  const [isDragOver, setDragOver] = useState(false);
  const [isDropped, setDropped] = useState(false);

  const handleDragStart = event => {
    console.log('Start');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    setSource(item);
  };

  const handleDrop = async event => {
    console.log('Drop');
    event.preventDefault();
    setDragOver(false);
    setDropped(true);
    setSource(itemSource);
  };

  useEffect(() => {
    if (!isDragOver && isDropped) {
      console.log('Callback');
      console.log(isDragOver);
      callback({
        itemSource,
        target: item,
      });
    }
  }, [isDragOver, isDropped]);

  const handleDragOver = event => {
    event.preventDefault();
    console.log('Over');
    setDropped(false);
    if (itemSource && itemSource.id === item.id) return null;
    setDragOver(true);
  };

  const handleDragLeave = event => {
    console.log('Leave');
    setDragOver(false);
  };

  return (
    <>
      <Root
        id={item.id}
        draggable
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
        onDragLeave={handleDragLeave}
        isDragOver={isDragOver}
        position={position}
        {...rest}
      >
        <span>{item.id}</span>
      </Root>
    </>
  );
};

export default DefaultTile;
