import React from 'react';
import PropTypes from 'prop-types';
import { Chevron } from 'components/commons/Icons';
import Button from 'components/commons/Buttons/Button';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  border: none;
`;

const NavButton = ({ onClick, shouldCollapsed, side }) => {
  const renderChevron = () => {
    if (side === 'left') {
      return <Chevron direction={shouldCollapsed ? 'right' : 'left'} />;
    }
    if (side === 'right') {
      return <Chevron direction={shouldCollapsed ? 'left' : 'right'} />;
    }
    if (side === 'bottom') {
      return <Chevron direction={shouldCollapsed ? 'up' : 'down'} />;
    }
  };
  return (
    <CustomButton circle action="neutral" type="button" onClick={onClick}>
      {renderChevron()}
    </CustomButton>
  );
};

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  shouldCollapsed: PropTypes.bool.isRequired,
};

export default NavButton;
