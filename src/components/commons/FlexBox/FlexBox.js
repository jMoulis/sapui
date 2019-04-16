import styled from '@emotion/styled';

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex: ${({ flex }) => flex};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ css }) => ({ ...css })};
`;

export default FlexBox;
