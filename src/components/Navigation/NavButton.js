import React from 'react';
import PropTypes from 'prop-types';
import { Chevron } from 'components/commons/Icons';
import Button from 'components/commons/Buttons/Button';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  border: none;
`;

const NavButton = ({ onClick, collapsed, side }) => {
  const renderChevron = () => {
    if (side === 'left') {
      return <Chevron direction={collapsed ? 'right' : 'left'} />;
    }
    if (side === 'right') {
      return <Chevron direction={collapsed ? 'left' : 'right'} />;
    }
    if (side === 'bottom') {
      return <Chevron direction={collapsed ? 'up' : 'down'} />;
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
  collapsed: PropTypes.bool.isRequired,
  side: PropTypes.string.isRequired,
};

export default NavButton;
