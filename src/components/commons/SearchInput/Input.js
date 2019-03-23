import styled from '@emotion/styled';

const InputText = styled.input`
  font-size: 1.5rem;
  box-sizing: border-box;
  outline: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.forms.element.borderColor};
  background-color: ${({ theme }) => theme.colors.action.secondary};
  /* border-radius: 4px; */
  transition: border-color 0.125s;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  transition: all 150ms ease-in;
  ${({ theme }) => theme.forms.element.input};
`;

export default InputText;
