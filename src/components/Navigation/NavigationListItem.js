import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem } from 'components/commons/List';
import { FlexBox } from 'components/commons/FlexBox';
import { Chevron, Icon } from 'components/commons/Icons';

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
  width: ${({ collapsed }) => collapsed && 0};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 300ms ease;
`;

const CustomChevron = styled(Chevron)`
  font-size: 1rem;
  flex: collapsed && 1;
  &:hover {
    background-color: transparent;
  },
`;

const CustomIcon = styled(Icon)`
  padding-right: 1.2rem;
  &:hover {
    background-color: transparent;
  }
`;

const NavigationListItem = ({ path, callback, label, collapsed, icon }) => {
  return (
    <ListItemCustom>
      <NavLinkCustom to={path} onClick={callback} title={label}>
        <FlexBox css={{ overflow: 'hidden' }}>
          <CustomIcon icon={icon} />
          <Label collapsed={collapsed}>{label}</Label>
        </FlexBox>
        <CustomChevron icon="right" />
      </NavLinkCustom>
    </ListItemCustom>
  );
};

NavigationListItem.propTypes = {
  path: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavigationListItem;
