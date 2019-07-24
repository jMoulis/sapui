import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';
// import { Chart } from './Chart';
// import Card from './Card';
// import Tile from './Tile';
// import Test from './Test';
import { ReactComponent as AddIcon } from 'assets/icons/plus-solid.svg';
import DefaultTile from './DefaultTile';
import { cards, gridSize, widgets } from './fakeData';

const Root = styled.section`
  label: Dashboard;
  padding: 1rem;
  display: flex;
  flex: 1;
`;

const Content = styled(FlexBox)`
  label: DashboardContent;
  position: relative;
  flex: 1;
  flex-wrap: wrap;
  grid-area: main;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-auto-rows: 20rem;
  grid-auto-flow: dense;
`;

const moveInArray = ({ items, targetId, sourceId, elementToMove }) => {
  if (!items || !targetId || !sourceId || !elementToMove) return null;
  const targetIndex = items.findIndex(item => item && item.id === targetId);
  const sourceIndex = items.findIndex(item => item && item.id === sourceId);
  const newValues = [...items.filter((item, index) => index !== sourceIndex)];
  newValues.splice(targetIndex, 0, {
    ...elementToMove,
    position: {
      ...elementToMove.position,
    },
  });
  return newValues;
};

const Dashboard = ({ setActiveApp, actions, rootBoundingRect }) => {
  const [items, setItem] = useState([...gridSize]);
  const [emptySlot, setEmptySlot] = useState([]);
  const mainRef = useRef();
  const handleMoveItem = ({ target, source }) => {
    if (!target || !source) return null;
    setItem(
      moveInArray({
        items,
        targetId: target.id,
        sourceId: source.id,
        elementToMove: source,
      }),
    );
  };

  const handleRemoveItem = ({ source }) => {
    const newValues = items.filter(item => item.id !== source.id);
    setItem({ values: newValues });
  };

  const handleResize = ({ target }) => {
    const newValues = items.map(item => {
      if (item.id === target.id) {
        return target;
      }
      return item;
    });
    setItem(newValues);
  };

  const createGrid = () => {
    const { width, height } = rootBoundingRect.current.getBoundingClientRect();
    const columnAvailable = Math.floor(width / (200 - 20));
    const rowAvailable = Math.floor(height / (200 - 20));
    const totalSlot = columnAvailable * rowAvailable;
    const totalCol = items.reduce((tot, item) => {
      const itemTotal = item.position.gridColumnEnd * item.position.gridRowEnd;
      return tot + itemTotal;
    }, 0);

    console.log(totalSlot);
    for (let i = 0; i < totalSlot - totalCol; i += 1) {
      setEmptySlot(prevSlot => [
        ...prevSlot,
        {
          id: i,
          text: 'EmptySlot',
          position: {
            gridRowEnd: 1,
            gridColumnEnd: 1,
          },
        },
      ]);
    }

    return totalSlot;
  };
  useEffect(() => {
    setEmptySlot([]);
    createGrid();
  }, [items]);
  return (
    <Root ref={mainRef}>
      <Content>
        {/* {cards.map((card, index) => (
          <Tile position={card.position} key={index} id={card.id}>
            <Card
              icon={card.icon}
              color={card.color}
              title={card.title}
              to={card.to}
            />
          </Tile>
        ))} */}
        {/* {tiles.map(tile => {
          return (
            <Tile id={tile.id} position={tile.position}>
              {<tile.component id={tile.id} />}
            </Tile>
          );
        })} */}
        {items &&
          Array.isArray(items) &&
          items.map((item, index) => {
            const Widget = widgets[item.component.name];
            return (
              <DefaultTile
                item={item}
                position={item && item.position}
                key={index}
                id={item.id}
                callback={handleMoveItem}
                text={item.id}
                cbResize={handleResize}
                removeItem={handleRemoveItem}
              >
                {Widget ? <Widget {...item.component.props} /> : null}
              </DefaultTile>
            );
          })}
        {emptySlot &&
          emptySlot.map(slot => {
            return (
              <DefaultTile
                item={slot}
                noDragable
                noMenu
                id={-1}
                text="EmptySlot"
                cbResize={handleResize}
                removeItem={handleRemoveItem}
                callback={handleMoveItem}
                onClick={() => {
                  setActiveApp(actions.newShortCut);
                }}
              >
                <AddIcon width="3rem" />
              </DefaultTile>
            );
          })}
      </Content>
    </Root>
  );
};

export default Dashboard;
