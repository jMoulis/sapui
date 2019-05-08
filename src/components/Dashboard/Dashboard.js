import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';
// import { Chart } from './Chart';
// import Card from './Card';
// import Tile from './Tile';
// import Test from './Test';
import DefaultTile from './DefaultTile';
import { cards, gridSize } from './fakeData';
import Trash from './Trash';

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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 20rem;
`;

const moveInArray = ({ items, tragetId, sourceId, elementToMove }) => {
  const targetIndex = items.findIndex(item => item && item.id === tragetId);
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

const Dashboard = () => {
  const [items, setItem] = useState({ values: [...gridSize], changed: false });
  const [sourceItem, setSource] = useState(null);

  const handleMoveItem = ({ target }) => {
    setItem({
      values: moveInArray({
        items: items.values,
        tragetId: target.id,
        sourceId: sourceItem.id,
        elementToMove: sourceItem,
      }),
    });
  };

  const handleRemoveItem = ({ source }) => {
    const newValues = items.values.filter(item => item.id !== source.id);
    setItem({ values: newValues });
  };

  const handleResize = ({ target }) => {
    const newValues = items.values.map(item => {
      if (item.id === target.id) {
        return target;
      }
      return item;
    });
    setItem({ values: newValues });
  };

  return (
    <Root>
      <Content length={cards.length}>
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
          Array.isArray(items.values) &&
          items.values.map((item, index) => {
            if (!item)
              return (
                <DefaultTile
                  key={index}
                  id={index}
                  callback={handleMoveItem}
                  setSource={setSource}
                  sourceItem={sourceItem}
                  text="EmptySlot"
                />
              );
            return (
              <DefaultTile
                item={item}
                position={item && item.position}
                key={index}
                id={index}
                callback={handleMoveItem}
                setSource={setSource}
                sourceItem={sourceItem}
                text={item.id}
                cbResize={handleResize}
                removeItem={handleRemoveItem}
              >
                {item.component ? <item.component /> : null}
              </DefaultTile>
            );
          })}
      </Content>
    </Root>
  );
};

export default Dashboard;
