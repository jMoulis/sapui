import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'components/commons/Icons';

const NavLinkCustom = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5rem;
  min-width: 20rem;
`;

const Root = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral3};
  background-color: white;
  cursor: pointer;
  transition: all 100ms ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.neutral.neutral2};
  }
`;

const Label = styled.span`
  width: ${({ collapsed }) => collapsed && 0};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 300ms ease;
  margin-left: 1.5rem;
`;

const MenuListItem = ({ to, callback, label, collapsed, icon }) => {
  return (
    <Root>
      <NavLinkCustom to={to} onClick={callback} title={label}>
        <Icon icon={icon} size="2.5rem" />
        <Label collapsed={collapsed}>{label}</Label>
      </NavLinkCustom>
    </Root>
  );
};

MenuListItem.propTypes = {
  to: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuListItem;
