import React from 'react';
import { List, ListItem } from 'components/commons/List';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import actions from './actions';

const Root = styled(List)`
  grid-area: action;
`;

const ActionPanel = ({ callback }) => {
  return (
    <Root>
      {Object.values(actions).map((action, index) => (
        <ListItem
          key={index}
          onClick={() => {
            if (action.component && typeof action.component === 'function') {
              callback(action.component);
            }
          }}
        >
          {action.label}
        </ListItem>
      ))}
    </Root>
  );
};

ActionPanel.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default ActionPanel;
