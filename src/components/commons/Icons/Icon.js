/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

const Icon = styled.span`
  label: Icon;
  font-family: 'sapui-icons';
  font-size: ${({ sm, md }) => (sm ? '1rem' : md ? '1.5rem' : '2rem')};
  display: flex;
  height: ${({ sm, md }) => (sm ? '2rem' : md ? '2.5rem' : '3.5rem')};
  width: ${({ sm, md }) => (sm ? '2rem' : md ? '2.5rem' : '3.5rem')};
  align-items: center;
  justify-content: center;
  border-radius: 2000px;
  padding: 0.5rem;
  transition: all 150ms ease;
  margin: ${({ margin }) => margin || 0};
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.customTheme.colors.blue};
  &:hover {
    background-color: rgba(52, 97, 135, 0.15);
  }
`;

export default Icon;
