import React from 'react';
import styled from '@emotion/styled';

const Root = styled.section`
  label: Dashboard;
  padding: 1rem;
  flex: 1;
`;

const Content = styled.div`
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

const Dashboard = () => {
  return (
    <Root>
      <Content>Dashboard</Content>
    </Root>
  );
};

export default Dashboard;
