import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/commons/Icons';
import Button from 'components/commons/Buttons/Button';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  border: none;
  height: 3rem;
  width: 3rem;
`;

const NavButton = ({ onClick, collapsed, side }) => {
  function renderChevron() {
    switch (side) {
      case 'right':
        return (
          <Icon
            icon={collapsed ? 'left' : 'right'}
            width="1rem"
            height="1.6rem"
          />
        );
      case 'bottom':
        return (
          <Icon icon={collapsed ? 'up' : 'down'} width="1rem" height="1.6rem" />
        );
      default:
        return (
          <Icon
            icon={collapsed ? 'right' : 'left'}
            width="1rem"
            height="1.6rem"
          />
        );
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
