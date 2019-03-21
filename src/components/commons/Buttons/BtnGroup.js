import styled from '@emotion/styled';

const BtnGroup = styled.div`
  display: flex;
  margin: 0.5rem;
  & > button {
    margin: 0;
  }
  & > button:not(:first-of-type):not(:last-child) {
    border-right: none;
    border-left: none;
    border-radius: 0;
  }
  & > button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 1;
  }
  & > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default BtnGroup;
