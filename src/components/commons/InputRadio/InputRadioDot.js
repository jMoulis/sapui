import styled from '@emotion/styled';

const InputRadioDot = styled.div`
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export default InputRadioDot;
