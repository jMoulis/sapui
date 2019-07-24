import styled from '@emotion/styled';

const Label = styled.label`
  position: absolute;
  top: ${({ focused }) => (focused ? '0.5rem' : '1.5rem')};
  font-size: ${({ focused }) => (focused ? '1rem' : '1.5rem')};
  left: 1rem;
  transition: all 150ms ease;
  color: ${({ theme }) => `rgba(${theme.colors.rgba.gray}, 0.7)`};
  z-index: 10;
  user-select: ${({ disabled }) => disabled && 'none'};
  cursor: default;
`;

export default Label;
