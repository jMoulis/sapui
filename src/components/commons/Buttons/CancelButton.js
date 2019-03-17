import styled from '@emotion/styled';
import ResetButton from './ResetButton';

const CancelButton = styled(ResetButton)`
  border: none;
  background-color: transparent;
  outline: none;
  color: #cae4fb;
  text-shadow: 0 0 0.125rem #000000;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  height: 2.6rem;
  border-radius: 0.2rem;
  &:hover {
    background-color: rgba(99, 127, 153, 0.5);
  }
  &:active {
    background-color: #91c8f6;
    color: #2f3c48;
    text-shadow: none;
  }
`;

export default CancelButton;
