import styled from '@emotion/styled';
import BtnReset from './BtnReset';

const BtnRegular = styled(BtnReset)`
  ${({ theme }) => {
    return theme.custom.buttons.regular;
  }}
  ${({ theme, isSelected }) => {
    return isSelected && { ...theme.custom.buttons.actions['&:hover'] };
  }};
`;

export default BtnRegular;
