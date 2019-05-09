/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import BtnMenu from './BtnMenu';
import TileMenu from './TileMenu';

const Root = styled.div`
  label: Tile;
  cursor: pointer;
  resize: both;
  ${({ theme, position }) => {
    return {
      [theme.mediaQueries.sm]: {
        gridRowEnd: `span ${position && position.gridRowEnd}`,
        gridColumnEnd: `span ${position && position.gridColumnEnd}`,
      },
    };
  }};
  z-index: ${({ zIndex }) => zIndex};
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
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
  ${({ isDragStart }) => {
    return isDragStart
      ? {
          transform: 'rotate(5deg)',
          transition: 'all 150ms ease-in',
        }
      : null;
  }}
`;

const DefaultTile = ({
  children,
  callback,
  position,
  item,
  text,
  id,
  cbResize,
  removeItem,
  noDragable,
  noMenu,
  onClick,
  width,
  height,
  ...rest
}) => {
  const [isDragOver, setDragOver] = useState(false);
  const [isDropped, setDropped] = useState(false);
  const [defaultSize, setDefaultSize] = useState();
  const [zIndex, setZIndex] = useState(null);
  const [isDragStart, setDragStart] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [isBtnMenu, setBtnMenu] = useState(false);
  const [sourceItem, setSource] = useState(null);
  const divRef = useRef();
  const collapsedRef = useRef(isMenu);

  const handleClickOutside = ({ target }) => {
    if (isMenu) {
      if (!target.dataset.menu) {
        setMenu(false);
      }
    }
  };
  useEffect(() => {
    collapsedRef.current = isMenu;
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenu]);

  const handleDragStart = event => {
    setDragStart(true);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    console.log(item);
    const itemJson = JSON.stringify(item);
    event.dataTransfer.setData('item', itemJson);
  };

  const resetCss = () => {
    setZIndex(null);
    setDragStart(false);
    divRef.current.style.removeProperty('width');
    divRef.current.style.removeProperty('height');
  };

  useEffect(() => {
    if (!isDragOver && isDropped) {
      console.log(item);
      callback({
        target: item,
        source: sourceItem,
      });
      resetCss();
    }
  }, [isDragOver, isDropped]);

  const handleDrop = event => {
    setDragOver(false);
    setDropped(true);
    const itemJson = event.dataTransfer.getData('item');
    console.log(itemJson);
    setSource(JSON.parse(itemJson));
    resetCss();
  };

  const handleDragOver = event => {
    event.preventDefault();
    setDropped(false);
    if (sourceItem && item && sourceItem.id === item.id) return null;
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleMouseDown = () => {
    setDefaultSize(null);
    setZIndex(10);
  };

  const handleStopResizing = event => {
    const { width, height } = event.target.getBoundingClientRect();
    setZIndex(null);
    const colSpan = Math.floor(width / 200);
    const rowSpan = Math.floor(height / 200);
    if (event.target === divRef.current && cbResize) {
      cbResize({
        source: sourceItem,
        target: {
          ...item,
          position: {
            gridRowEnd: rowSpan,
            gridColumnEnd: colSpan,
          },
        },
      });
      resetCss();
    }
  };

  return (
    <Root
      id={id || item.id}
      width={width}
      height={height}
      draggable={!noDragable}
      zIndex={zIndex}
      defaultSize={defaultSize}
      ref={divRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragLeave={handleDragLeave}
      onDragEnd={() => resetCss()}
      isDragOver={isDragOver}
      position={position}
      onMouseUp={handleStopResizing}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setBtnMenu(true)}
      onMouseLeave={() => setBtnMenu(false)}
      onClick={onClick}
      isDragStart={isDragStart}
      {...rest}
    >
      {children || <span>{text}</span>}
      {!noMenu && (
        <>
          <BtnMenu
            inProps={isBtnMenu || isMenu}
            callback={() => setMenu(prevState => !prevState)}
          />

          <TileMenu inProps={isMenu} removeItem={removeItem} item={item} />
        </>
      )}
    </Root>
  );
};

export default DefaultTile;
