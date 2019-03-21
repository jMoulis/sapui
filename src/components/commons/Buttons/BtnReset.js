import styled from '@emotion/styled';

const BtnReset = styled.button`
  display: inline-block;
  margin: 0 0.25rem;
  padding: 0;
  appearance: none;
  outline: 0;
  border: 0;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  font-size: 1.2rem;
  line-height: 1.42857;
  font-weight: 400;
  line-height: 1;
  padding-left: ${({ square }) => (square ? '0.2rem' : '1.2rem')};
  padding-right: ${({ square }) => (square ? '0.2rem' : '1.2rem')};
  border-style: solid;
  border-width: 1px;
  height: ${({ small, xs, large }) => {
    if (xs) return 'unset';
    if (small) return '2rem';
    if (large) return '5rem';
    return '2.5rem';
  }};
  ${({ theme }) => theme.custom.buttons.actions}
  transition: all 0.125s ease-in;
  & > i {
    font-size: ${({ small, xs, large }) => {
      if (xs) return '1rem';
      if (small) return '1.5rem';
      if (large) return '3.5rem';
      return '1.7rem';
    }};
    border-radius: 2px;
    &:hover {
      background-color: transparent;
    }
  }
`;

export default BtnReset;
