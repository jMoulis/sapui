import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem } from 'components/commons/List';
import { FlexBox } from 'components/Layout';
import { ChevronRight, Icon } from 'components/commons/Icons';

const NavLinkCustom = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5rem;
`;

const ListItemCustom = styled(ListItem)`
  height: 5rem;
`;
const Label = styled.span`
  width: ${({ isCollapse }) => isCollapse && 0};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 300ms ease;
`;
const NavigationListItem = ({ path, callback, label, isCollapse }) => {
  return (
    <ListItemCustom>
      <NavLinkCustom to={path} onClick={callback} title={label}>
        <FlexBox>
          <Icon
            css={{
              paddingRight: '1rem',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            &#xe199;
          </Icon>
          <Label isCollapse={isCollapse}>{label}</Label>
        </FlexBox>
        <ChevronRight
          css={{
            fontSize: '1rem',
            flex: isCollapse && 1,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        />
      </NavLinkCustom>
    </ListItemCustom>
  );
};

export default NavigationListItem;
