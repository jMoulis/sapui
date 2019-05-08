import React from 'react';
import styled from '@emotion/styled';
import { Fade } from 'components/commons/animations';
import { ReactComponent as Menu } from 'assets/icons/ellipsis-v-solid.svg';

const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  outline: none;
  & svg {
    cursor: pointer;
  }
  &:hover {
    color: blue;
  }
`;

const BtnMenu = ({ callback, inProps }) => {
  return (
    <Fade inProps={inProps}>
      <Button type="button" onClick={callback}>
        <Menu width="0.7rem" />
      </Button>
    </Fade>
  );
};

export default BtnMenu;
