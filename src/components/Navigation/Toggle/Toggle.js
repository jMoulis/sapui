import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';
import NavButton from '../NavButton';
import Root from './Root';

const CustomBox = styled.div`
  padding: 1rem;
  height: 6rem;
  justify-content: ${({ side }) => {
    if (side === 'bottom') {
      return 'flex-end';
    }
    return side === 'left' ? 'flex-end' : 'flex-start';
  }};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral3};
  background-color: white;
  display: flex;
  align-items: center;
`;

const Toggle = ({
  side,
  children,
  callback,
  collapsed,
  hidden,
  width,
  isSmall,
  close,
  isResizing,
}) => {
  const rootRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (!collapsed) {
        if (!rootRef.current.contains(target) && target.dataset.id !== 'menu') {
          close();
        }
      }
    };
    if (isSmall) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [collapsed]);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { collapsed, toggle: callback }),
  );
  return (
    <Root
      ref={rootRef}
      collapsed={collapsed}
      side={side}
      hidden={hidden}
      width={width}
      isResizing={isResizing}
    >
      <CustomBox side={side}>
        <NavButton collapsed={collapsed} side={side} onClick={callback} />
      </CustomBox>
      <FlexBox css={{ backgroundColor: 'white' }} flex="1" column>
        {childrenWithProps}
      </FlexBox>
    </Root>
  );
};

Toggle.propTypes = {
  side: PropTypes.string.isRequired,
  children: PropTypes.object,
  callback: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  hidden: PropTypes.bool,
  width: PropTypes.string,
  isSmall: PropTypes.bool,
  isResizing: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  children: null,
  width: null,
  isSmall: false,
  hidden: null,
};

export default Toggle;
