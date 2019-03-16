import styled from '@emotion/styled';
import { ResetButton } from '.';

export const ButtonEmphasized = styled(ResetButton)`
  background-color: #5496cd;
  border-color: rgb(65, 138, 199);
  color: #ffffff;
  text-shadow: 0 0 0.125rem #000000;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  height: 2.6rem;
  border-radius: 0.2rem;
  min-width: 2rem;
  font-size: 1.4rem;
  &:hover {
    background-color: ${({ theme }) =>
      theme.buttons.emphasized.hover.backgroundColor};
    border-color: ${({ theme }) => theme.buttons.emphasized.hover.borderColor};
  }
`;
