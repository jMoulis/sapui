import styled from '@emotion/styled';

const Icon = styled.i`
  label: Icon;
  font-family: 'sapui-icons';
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 2000px;
  transition: all 150ms ease;
  margin: ${({ margin }) => margin || 0};
  font-style: normal;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: rgba(52, 97, 135, 0.15);
  }
`;

export default Icon;
