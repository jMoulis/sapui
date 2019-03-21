import styled from '@emotion/styled';
import BtnRegular from './BtnRegular';

const BtnActions = styled(BtnRegular)`
  border-color: ${({ theme, action, isSelected }) => {
    return (
      theme.custom.colors.status[action] || theme.custom.colors.status.default
    );
  }};
  background-color: ${({ theme, action, isSelected }) =>
    isSelected &&
    (theme.custom.colors.status[action] || theme.custom.colors.status.default)};
  color: ${({ theme, action }) =>
    theme.custom.colors.status[action] || theme.custom.colors.status.default};
  &:hover {
    border-color: ${({ theme, action }) =>
      theme.custom.colors.status[action] || theme.custom.colors.status.default};
    color: ${({ theme }) => theme.custom.colors.action.secondary};
    background-color: ${({ theme, action }) =>
      theme.custom.colors.status[action] || theme.custom.colors.status.default};
  }
  &:active {
    border-color: ${({ theme, action }) =>
      theme.custom.colors.status[action] || theme.custom.colors.status.default};
    background-color: ${({ theme, action }) =>
      theme.custom.colors.status[action] || theme.custom.colors.status.default};
    box-shadow: 0 0 0 1px
      ${({ theme, action }) =>
        theme.custom.colors.status[action] ||
        theme.custom.colors.status.default};
  }
`;

export default BtnActions;
