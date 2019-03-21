/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

const Icon = styled.i`
  label: Icon;
  font-family: 'sapui-icons';
  font-size: ${({ sm, md }) => (sm ? '1rem' : md ? '1.5rem' : '2rem')};
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 2000px;
  padding: 0.5rem;
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
