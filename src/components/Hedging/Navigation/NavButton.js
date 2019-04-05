import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from 'components/commons/Icons';
import Button from 'components/commons/Buttons/Button';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  border: none;
`;

const NavButton = ({ onClick, state }) => {
  return (
    <CustomButton
      circle
      action="neutral"
      type="button"
      onClick={() => onClick(!state)}
    >
      {state ? <ChevronRight /> : <ChevronLeft />}
    </CustomButton>
  );
};

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};

export default NavButton;
