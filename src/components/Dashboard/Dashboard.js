import React, { useState } from 'react';

import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';
// import { Chart } from './Chart';
// import Card from './Card';
// import Tile from './Tile';
// import Test from './Test';
import DefaultTile from './DefaultTile';
import { cards, gridSize } from './fakeData';

const Root = styled.section`
  label: Dashboard;
  display: grid;
  grid-template-areas: 'main';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 1rem;
  height: 80vh;
`;

const Content = styled(FlexBox)`
  label: DashboardContent;
  flex-wrap: wrap;
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 20rem;
  ${({ theme }) => {
    return {
      [theme.mediaQueries.sm]: {
        gridTemplateColumns: 'repeat(4, minmax(20rem, 1fr))',
        gridTemplateRows: 'repeat(4, 1fr)',
      },
    };
  }};
`;

const Dashboard = () => {
  const [items, setItem] = useState({ values: [...gridSize], changed: false });
  const [itemSource, setSource] = useState(null);

  const handleMoveItem = ({ target }) => {
    const newSource = { ...itemSource, position: target.position };
    const newTarget = { ...target, position: itemSource.position };

    const newValues = items.values.map(item => {
      if (item.id === itemSource.id) return newSource;
      if (item.id === target.id) return newTarget;
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
            return (
              <DefaultTile
                item={item}
                position={item.position}
                key={index}
                id={item.id}
                callback={handleMoveItem}
                setSource={setSource}
                itemSource={itemSource}
              >
                {item.component ? <item.component /> : null}
              </DefaultTile>
            );
          })}
        {/* <Tile
          position={{
            gridColumn: '1 / 3',
            gridRow: '2 / -1',
          }}
        >
          <Chart id="3" type="bar" />
        </Tile>
        <Tile
          position={{
            gridColumn: '3 / 4',
            gridRow: '2 / 3',
          }}
        >
          <Chart id="1" type="polarArea" />
        </Tile>
        <Tile
          position={{
            gridColumn: '4 / 5',
            gridRow: '2 / 3',
          }}
        >
          <Chart id="2" type="radar" />
        </Tile>
        <Tile
          position={{
            gridColumn: '3 / 5',
            gridRow: '3 / 5',
          }}
        >
          <Chart id="4" type="bar" />
        </Tile> */}
      </Content>
    </Root>
  );
};

export default Dashboard;
