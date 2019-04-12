import React from 'react';
import Icon from './Icon';

const setIcon = {
  up: '&#xe1e1;',
  down: '&#xe1e2;',
  right: '&#xe066;',
  left: '&#xe1eb;',
};

const Chevron = ({ direction, ...rest }) => {
  return (
    <Icon {...rest} dangerouslySetInnerHTML={{ __html: setIcon[direction] }} />
  );
};

export default Chevron;
