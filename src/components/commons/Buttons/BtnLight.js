import styled from '@emotion/styled';
import BtnReset from './BtnReset';

const BtnLight = styled(BtnReset)`
  ${({ theme }) => {
    return theme.custom.buttons.light;
  }}
`;

export default BtnLight;
