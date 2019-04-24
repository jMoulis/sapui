import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';
import NavButton from './NavButton';
import Root from './Root';

const Header = styled.header`
  label: ToggleHeader;
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

const Content = styled(FlexBox)`
  label: ToggleContent;
  background-color: ${({ theme }) => theme.colors.backgrounds.background2};
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
  const collapsedRef = useRef(collapsed);
  const [shouldClose, setClose] = useState(collapsed);

  useEffect(() => {
    collapsedRef.current = collapsed;
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
    React.cloneElement(child, { collapsed, toggle: callback, close }),
  );
  return (
    <Root
      ref={rootRef}
      collapsed={collapsed}
      side={side}
      hidden={hidden}
      width={width}
      isResizing={isResizing}
      isSmall={isSmall}
      onMouseEnter={() => {
        setClose(collapsedRef.current);
        if (collapsed) return callback();
      }}
      onMouseLeave={() => {
        if (shouldClose && !collapsed) {
          close();
        }
      }}
      onClick={() => {
        setClose(false);
      }}
    >
      <Header side={side}>
        <NavButton collapsed={collapsed} side={side} onClick={callback} />
      </Header>
      <Content flex="1" column>
        {childrenWithProps}
      </Content>
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
