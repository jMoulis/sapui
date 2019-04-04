import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

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

const Dashboard = ({ config }) => {
  return (
    <Root>
      {config &&
        Object.values(config.router).map(route => {
          return (
            route.allowed && (
              <StyledLink
                key={route.path}
                to={{
                  pathname: route.path,
                }}
              >
                <Tile>{route.title}</Tile>
              </StyledLink>
            )
          );
        })}
    </Root>
  );
};

const mapStateToProps = ({ hedgingReducer }) => ({
  config: hedgingReducer.config,
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
