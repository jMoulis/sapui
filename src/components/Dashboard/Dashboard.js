import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import applications from './applications';

const Tile = styled.div`
  width: 14.8rem;
  height: 14.8rem;
  border: 1px solid lightgray;
  margin: 1rem;
  cursor: pointer;
`;

const Root = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem auto;
  justify-content: space-evenly;
  &::after {
    content: '';
    width: 14.8rem;
    height: 14.8rem;
    margin: 1rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export default function Dashboard() {
  return (
    <Root>
      {applications.map(
        application =>
          application.allowed && (
            <StyledLink
              key={application.path}
              to={{
                pathname: application.path,
              }}
            >
              <Tile>{application.title}</Tile>
            </StyledLink>
          ),
      )}
    </Root>
  );
}
