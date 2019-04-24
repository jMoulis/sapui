import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { List, ListItem } from 'components/commons/List';
import { Icon, AddIcon } from 'components/commons/Icons';
import actions from './actions';

const Root = styled(List)`
  grid-area: action;
`;

const ListItemCustom = styled(ListItem)`
  display: flex;
  padding: 1rem;
`;

const ListIcon = styled(Icon)`
  padding-right: 1.2rem;
  &:hover {
    background-color: transparent;
  }
`;

const ActionPanel = ({ callback, config }) => {
  return (
    <Root>
      {Object.values(actions).map((action, index) => (
        <ListItemCustom
          key={index}
          title={action.label}
          onClick={() => {
            if (action.component && typeof action.component === 'function') {
              callback(action.component);
            }
          }}
        >
          <ListIcon icon="add" />
          <Icon icon={action.icon} />
        </ListItemCustom>
      ))}
    </Root>
  );
};

ActionPanel.propTypes = {
  callback: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hedgingReducer }) => ({
  config: hedgingReducer.config,
});

export default connect(mapStateToProps)(ActionPanel);
