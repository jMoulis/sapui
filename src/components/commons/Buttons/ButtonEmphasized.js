import styled from '@emotion/styled';
import { ResetButton } from '.';

const ButtonEmphasized = styled(ResetButton)`
  background-color: ${({ theme }) =>
    theme.customTheme.buttons.emphasized.backgroundColor};
  border-color: ${({ theme }) =>
    theme.customTheme.buttons.emphasized.borderColor};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 0.125rem ${({ theme }) => theme.colors.black};
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  height: 2.6rem;
  border-radius: 0.2rem;
  min-width: 2rem;
  font-size: 1.4rem;
  &:hover {
    background-color: ${({ theme }) =>
      theme.customTheme.buttons.emphasized.hover.backgroundColor};
    border-color: ${({ theme }) =>
      theme.customTheme.buttons.emphasized.hover.borderColor};
  }
  &:active {
    background-color: ${({ theme }) =>
      theme.customTheme.buttons.emphasized.active.backgroundColor};
    border-color: ${({ theme }) =>
      theme.customTheme.buttons.emphasized.active.borderColor};
    text-shadow: none;
  }
`;

export default ButtonEmphasized;
