import React from 'react';
import AnimationCore from './AnimationCore';

const Slide = ({ inProps, children, ...rest }) => {
  return (
    <AnimationCore animation="slide" inProps={inProps} {...rest}>
      {children}
    </AnimationCore>
  );
};
export default Slide;
