import styled from '@emotion/styled';

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex: ${({ flex }) => flex};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ css }) => ({ ...css })};
`;

export default FlexBox;
