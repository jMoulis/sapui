import styled from '@emotion/styled';

const Tile = styled.div`
  label: Tile;
  margin: 0.5rem;
  cursor: pointer;
  grid-area: ${({ gridArea }) => gridArea};
  overflow: hidden;
  position: relative;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.backgrounds.background2};
  transition: all 150ms ease-in;
  &:hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Tile;
