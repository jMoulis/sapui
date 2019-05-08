import React from 'react';
import AnimationCore from './AnimationCore';

const Fade = ({ inProps, children, ...rest }) => {
  return (
    <AnimationCore animation="fade" inProps={inProps} {...rest}>
      {children}
    </AnimationCore>
  );
};
export default Fade;
