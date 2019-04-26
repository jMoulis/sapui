import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';
import { Chart } from './Chart';
import Card from './Card';
import Tile from './Tile';
import { cards } from './fakeData';

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
  grid-template-rows: ${({ length }) => `repeat(${length}, 1fr)`};
  ${({ theme }) => {
    return {
      [theme.mediaQueries.sm]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '10rem repeat(3, 1fr)',
      },
    };
  }};
`;

const Dashboard = () => {
  return (
    <Root>
      <Content length={cards.length}>
        {cards.map((card, index) => (
          <Tile position={card.position} key={index}>
            <Card
              icon={card.icon}
              color={card.color}
              title={card.title}
              to={card.to}
            />
          </Tile>
        ))}

        <Tile
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
        </Tile>
      </Content>
    </Root>
  );
};

export default Dashboard;
