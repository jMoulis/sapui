import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { List, ListItem } from 'components/commons/List';
import { Icon } from 'components/commons/Icons';
import actions from './actions';

const Root = styled(List)`
  grid-area: action;
  & * {
    color: #354a5f;
  }
`;

const ListItemCustom = styled(ListItem)`
  display: flex;
  padding: 1rem;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &::after {
    content: ' ';
    position: absolute;
    width: 3px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${({ selectedMenu }) =>
      selectedMenu && 'rgb(255, 99, 132)'};
  }
`;

const ActionPanel = ({ setActiveApp, collapsed }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  return (
    <Root>
      {Object.values(actions).map((action, index) => (
        <ListItemCustom
          key={index}
          selectedMenu={selectedMenu === action.label && !collapsed}
          title={action.label}
          onClick={() => {
            if (action.component && typeof action.component === 'function') {
              setActiveApp({
                component: action.component,
                label: action.label,
              });
              setSelectedMenu(action.label);
            }
          }}
        >
          <Icon icon={action.icon} isNotif={action.isNotif} size="2.5rem" />
        </ListItemCustom>
      ))}
    </Root>
  );
};

ActionPanel.propTypes = {
  setActiveApp: PropTypes.func.isRequired,
};

export default ActionPanel;
