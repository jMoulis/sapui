import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FlexBox } from 'components/commons/FlexBox';
import { Icon } from 'components/commons/Icons';

const Root = styled(NavLink)`
  display: flex;
`;

const Title = styled.span`
  color: ${({ color }) => color};
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  font-family: quicksand-bold;
`;
const Text = styled.span`
  font-size: 2.5rem;
`;
const IconWrapper = styled(FlexBox)`
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  width: 8rem;
  color: white;
`;

const Card = ({ icon, color, title, to }) => {
  return (
    <Root to={to}>
      <IconWrapper color={color}>
        <Icon icon={icon} size="4rem" />
      </IconWrapper>
      <FlexBox
        flex="2"
        column
        justifyContent="center"
        css={{ marginLeft: '3rem' }}
      >
        <Title color={color}>{title}</Title>
        <Text>215</Text>
      </FlexBox>
    </Root>
  );
};

export default Card;
