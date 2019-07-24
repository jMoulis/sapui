import React from 'react';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right-solid.svg';
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left-solid.svg';
import { ReactComponent as Burger } from 'assets/icons/bars-solid.svg';
import { ReactComponent as Income } from 'assets/icons/euro-sign-solid.svg';
import { ReactComponent as Order } from 'assets/icons/order.svg';
import { ReactComponent as Product } from 'assets/icons/box.svg';
import { ReactComponent as Quote } from 'assets/icons/quote.svg';
import { ReactComponent as SignIn } from 'assets/icons/sign-in-alt-solid.svg';
import { ReactComponent as SignOut } from 'assets/icons/sign-out-alt-solid.svg';
import { ReactComponent as Message } from 'assets/icons/comment-alt-regular.svg';
import { ReactComponent as Task } from 'assets/icons/tasks-solid.svg';
import { ReactComponent as Add } from 'assets/icons/plus-solid.svg';
import { ReactComponent as Industry } from 'assets/icons/industry-solid.svg';

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
  signin: <SignIn width="100%" height="100%" />,
  signout: <SignOut width="100%" height="100%" />,
  message: <Message width="100%" height="100%" />,
  task: <Task width="100%" height="100%" />,
  add: <Add width="100%" height="100%" />,
  industry: <Industry width="100%" height="100%" />,
});
const IconWrapper = styled.div`
  width: ${({ size, width }) => width || size || '3rem'};
  height: ${({ size, height }) => height || size || '3rem'};
  cursor: pointer;
  position: relative;
  & svg {
    display: block;
    margin: auto;
  }
`;

const Badge = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: #33eee0;
  border-radius: 200px;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const IconMenu = ({ icon, size, width, height, onClick, isNotif, ...rest }) => {
  return (
    <IconWrapper
      size={size}
      width={width}
      height={height}
      onClick={onClick}
      {...rest}
    >
      {icons()[icon] || ''}
      {isNotif && <Badge />}
    </IconWrapper>
  );
};

export default IconMenu;
