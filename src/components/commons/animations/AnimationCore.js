import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animations = {
  fade: ({ inProps, duration, fillMode, timing }) => {
    const animationKeyframe = keyframes`
      0% {
        opacity: ${inProps ? 0 : 1} ;
      }
      100% {
        opacity: ${inProps ? 1 : 0} ;
      }
    `;
    return {
      animationName: `${animationKeyframe}`,
      animationTimingFunction: timing || 'ease-out',
      animationDuration: duration || '200ms',
      animationFillMode: fillMode || 'forwards',
    };
  },
  slide: ({ inProps, duration, fillMode, timing }) => {
    const animationKeyframe = keyframes`
      0% {
        transform: translateX(${inProps ? '-50px' : 0});
      }
      80% {
        transform: translateX(${inProps ? '10px' : 0});
      }
      100% {
        transform: translateX(${inProps ? '0' : '-50px'});
      }
    `;
    return {
      animationName: `${animationKeyframe}`,
      animationTimingFunction: timing || 'ease-out',
      animationDuration: duration || '200ms',
      animationFillMode: fillMode || 'forwards',
    };
  },
  slideUp: ({ inProps, duration, fillMode, timing }) => {
    const animationKeyframe = keyframes`
      0% {
        transform: translateY(${inProps ? '50px' : 0});
      }
   
      100% {
        transform: translateY(0);
      }
    `;
    return {
      animationName: `${animationKeyframe}`,
      animationTimingFunction: timing || 'ease-out',
      animationDuration: duration || '200ms',
      animationFillMode: fillMode || 'forwards',
    };
  },
};

const AnimationCoreStyled = styled.div(
  ({ animation, inProps, duration, fillMode, timing }) =>
    typeof animations[animation] && {
      ...animations[animation]({ inProps, duration, fillMode, timing }),
    },
);

const AnimationCore = ({
  inProps,
  children,
  delay,
  animation,
  duration,
  ...rest
}) => {
  let timer = null;
  const [hideChild, setHideChild] = useState(false);

  useEffect(() => {
    if (!inProps) {
      timer = setTimeout(() => {
        setHideChild(true);
      }, duration);
    } else {
      return setHideChild(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [inProps]);
  // const hideChild = () => setHideChild(false);

  if (hideChild || !inProps) return null;
  return (
    <AnimationCoreStyled
      inProps={inProps}
      delay={delay}
      animation={animation}
      {...rest}
    >
      {children}
    </AnimationCoreStyled>
  );
};

AnimationCore.propTypes = {
  duration: PropTypes.string,
  inProps: PropTypes.bool,
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  animation: PropTypes.string.isRequired,
};

AnimationCore.defaultProps = {
  duration: '200ms',
  inProps: true,
  delay: 400,
};

export default AnimationCore;
