import styled from '@emotion/styled';

const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral3};
  background-color: white;
  cursor: pointer;
  transition: all 100ms ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.neutral.neutral2};
  }
`;

export default ListItem;
