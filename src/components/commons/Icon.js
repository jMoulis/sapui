import styled from '@emotion/styled';

const Icon = styled.span`
  label: Icon;
  font-family: 'sapui-icons';
  font-size: 2rem;
  display: flex;
  height: 3.5rem;
  width: 3.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 2000px;
  padding: 0.5rem;
  transition: all 150ms ease;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: rgba(52, 97, 135, 0.15);
  }
`;

export default Icon;
