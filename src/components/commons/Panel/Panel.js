import React from 'react';
import styled from '@emotion/styled';

const PanelStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  margin: 1rem;
  ${({ theme }) => ({
    [theme.mediaQueries.sm]: {
      padding: 0,
    },
  })}
`;

const Header = styled.header`
  font-size: 2rem;
  /* background-color: ${({ theme }) =>
    theme.colors.backgrounds.background1}; */
  padding: 1rem 0;
`;

const Panel = ({ children, title }) => {
  return (
    <PanelStyled>
      <Header>{title}</Header>
      {children}
    </PanelStyled>
  );
};

export default Panel;
