import React from 'react';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right-solid.svg';
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left-solid.svg';
import { ReactComponent as Burger } from 'assets/icons/bars-solid.svg';
import { ReactComponent as Income } from 'assets/icons/euro-sign-solid.svg';
import { ReactComponent as Order } from 'assets/icons/order.svg';
import { ReactComponent as Product } from 'assets/icons/box.svg';
import { ReactComponent as Quote } from 'assets/icons/quote.svg';

import styled from '@emotion/styled';

const icons = () => ({
  dashboard: <DashboardIcon width="100%" height="100%" />,
  left: <ChevronLeft width="100%" height="100%" />,
  right: <ChevronRight width="100%" height="100%" />,
  burger: <Burger width="100%" height="100%" />,
  income: <Income width="100%" height="100%" />,
  order: <Order width="100%" height="100%" />,
  product: <Product width="100%" height="100%" />,
  quote: <Quote width="100%" height="100%" />,
});
const IconWrapper = styled.div`
  width: ${({ size, width }) => width || size || '3rem'};
  height: ${({ size, height }) => height || size || '3rem'};
  & svg {
    display: block;
    margin: auto;
  }
`;

const IconMenu = ({ icon, size, width, height, onClick, ...rest }) => {
  return (
    <IconWrapper
      size={size}
      width={width}
      height={height}
      onClick={onClick}
      {...rest}
    >
      {icons()[icon] || ''}
    </IconWrapper>
  );
};

export default IconMenu;
