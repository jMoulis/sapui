import React from 'react';
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
`;

const Content = styled(FlexBox)`
  label: DashboardContent;
  flex-wrap: wrap;
  grid-area: main;
  display: grid;
  grid-template-areas:
    'card1'
    'card2'
    'card3'
    'card4'
    'tile1'
    'tile2'
    'tile3'
    'tile4';
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 10rem) repeat(4, 20rem);
  ${({ theme }) => {
    return {
      [theme.mediaQueries.sm]: {
        gridTemplateAreas: `
          'card1 card2 card3 card4'
          'tile1 tile1 tile2 tile3'
          'tile1 tile1 tile4 tile4'`,
        gridTemplateColumns: 'repeat(4, minmax(25rem, 1fr))',
        gridTemplateRows: '10rem repeat(2, 30vh)',
        gridGap: '1rem',
      },
    };
  }};
`;

const Dashboard = () => {
  return (
    <Root>
      <Content>
        {cards.map((card, index) => (
          <Tile gridArea={`card${index + 1}`}>
            <Card
              icon={card.icon}
              color={card.color}
              title={card.title}
              to={card.to}
            />
          </Tile>
        ))}

        <Tile gridArea="tile1">
          <Chart id="3" type="bar" />
        </Tile>
        <Tile gridArea="tile2">
          <Chart id="1" type="polarArea" />
        </Tile>
        <Tile gridArea="tile3">
          <Chart id="2" type="radar" />
        </Tile>
        <Tile gridArea="tile4">
          <Chart id="4" type="bar" />
        </Tile>
      </Content>
    </Root>
  );
};

export default Dashboard;
