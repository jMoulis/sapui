import styled from '@emotion/styled';
import BtnReset from './BtnReset';

const BtnEmphasized = styled(BtnReset)`
  ${({ theme }) => {
    return theme.custom.buttons.emphasized;
  }}
`;

export default BtnEmphasized;
