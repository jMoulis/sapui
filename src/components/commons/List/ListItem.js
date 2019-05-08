import styled from '@emotion/styled';

const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral3};
  background-color: white;
  cursor: ${({ noHover }) => (!noHover ? 'pointer' : 'initial')};
  transition: all 100ms ease-in;
  &:hover {
    background: ${({ theme, noHover }) =>
      !noHover && theme.colors.neutral.neutral2};
  }
`;

export default ListItem;
