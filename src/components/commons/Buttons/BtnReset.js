import styled from '@emotion/styled';

const BtnReset = styled.button`
  display: inline-block;
  margin: 0 0.25rem;
  appearance: none;
  outline: 0;
  border: 0;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: ${({ xs }) => {
    if (xs) return '2px';
    return '4px';
  }};
  font-weight: 400;
  padding: ${({ square, xs, lg, sm }) => {
    if (square) return '0';
    if (xs) return '0 0.2rem';
    if (sm) return '0 0.5rem';
    if (lg) return '0 5rem';
    return '0.5rem 1rem';
  }};
  border-style: solid;
  border-width: 1px;
  /* height: ${({ sm, xs, lg }) => {
    if (xs) return 'unset';
    if (sm) return '1.5rem';
    if (lg) return '5rem';
    return '2.5rem';
  }}; */
  font-size: ${({ sm, xs, lg }) => {
    if (xs) return '0.7rem';
    if (sm) return '1rem';
    if (lg) return '4rem';
    return '1.5rem';
  }};
  transition: all 0.125s ease-in;
  & > i {
    font-size: ${({ sm, xs, lg }) => {
      if (xs) return '0.7rem';
      if (sm) return '1rem';
      if (lg) return '4rem';
      return '1.5rem';
    }};
    border-radius: 2px;
    &:hover {
      background-color: transparent;
    }
  }
`;

export default BtnReset;
