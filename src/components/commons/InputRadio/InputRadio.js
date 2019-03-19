import styled from '@emotion/styled';

const InputRadio = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border: 0.2rem solid ${({ theme }) => theme.customTheme.colors.gray};
  border-radius: 1rem;
  padding: 1px;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    border: 0.25rem solid ${({ theme }) => theme.customTheme.colors.blue};
  }
`;

export default InputRadio;
