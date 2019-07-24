import React from 'react';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right-solid.svg';
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left-solid.svg';
import styled from '@emotion/styled';

const icons = {
  dashboard: <DashboardIcon />,
  left: <ChevronLeft />,
  right: <ChevronRight />,
};
const IconWrapper = styled.div`
  width: ${({ size, width }) => width || size || '3rem'};
  height: ${({ size, height }) => height || size || '3rem'};
`;

const IconMenu = ({ icon, size, width, height }) => {
  return (
    <IconWrapper size={size} width={width} height={height}>
      {icons[icon] || ''}
    </IconWrapper>
  );
};

export default IconMenu;
