import React from 'react';
import PropTypes from 'prop-types';
import { Chevron } from 'components/commons/Icons';
import Button from 'components/commons/Buttons/Button';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  border: none;
`;

const NavButton = ({ onClick, collapsed, side }) => {
  function renderChevron() {
    switch (side) {
      case 'right':
        return <Chevron icon={collapsed ? 'left' : 'right'} />;
      case 'bottom':
        return <Chevron icon={collapsed ? 'up' : 'down'} />;
      default:
        return <Chevron icon={collapsed ? 'right' : 'left'} />;
    }
  }
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
