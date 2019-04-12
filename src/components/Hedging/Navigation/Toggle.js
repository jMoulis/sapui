import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FlexBox, Box } from 'components/Layout';
import FakeForm from 'components/Hedging/Forms/FakeForm';
import NavButton from './NavButton';

const setWidth = ({ side, shouldCollapsed }) => {
  if (side === 'bottom') return '100%';
  if (shouldCollapsed) return 0;
  if (!shouldCollapsed && (side === 'bottom' || side === 'top')) return '100%';
  return '20rem';
};

const setheight = ({ side, shouldCollapsed }) => {
  if (side !== 'bottom') return '100%';
  if (shouldCollapsed) return 0;
  if (!shouldCollapsed && (side === 'bottom' || side === 'top')) return '20rem';
  return '100%';
};

const Root = styled.aside`
  background-color: ${({ theme }) => theme.colors.action.secondary};
  grid-area: ${({ side }) => side};
  width: ${({ shouldCollapsed, hidden, width }) => {
    if (hidden) {
      if (shouldCollapsed) return 0;
      return width || '20rem';
    }
    return shouldCollapsed ? '5rem' : width || '20rem';
  }};
  transition: all 200ms ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${({ theme, side, shouldCollapsed }) => {
    return {
      [theme.mediaQueries.xs]: {
        position: 'absolute',
        zIndex: 1,
        top: side !== 'bottom' && 0,
        bottom: 0,
        left: (side === 'left' || side === 'bottom' || side === 'top') && 0,
        right: (side === 'right' || side === 'bottom' || side === 'top') && 0,
        width: setWidth({ shouldCollapsed, side }),
        height: setheight({ shouldCollapsed, side }),
      },
    };
  }}
`;
const CustomBox = styled(Box)`
  padding: 1rem;
  text-align: ${({ side }) => {
    if (side === 'bottom') {
      return 'end';
    }
    return side === 'left' ? 'end' : 'start';
  }};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.neutral3};
  background-color: white;
`;

const ContentWrapper = styled(FlexBox)`
  flex: 1;
  background-color: white;
`;

const Toggle = ({
  side,
  children,
  callback,
  shouldCollapsed,
  hidden,
  width,
}) => {
  const [isForm, displayForm] = useState(false);
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { shouldCollapsed }),
  );
  return (
    <Root
      shouldCollapsed={shouldCollapsed}
      side={side}
      hidden={hidden}
      width={width}
    >
      <CustomBox side={side}>
        <NavButton
          shouldCollapsed={shouldCollapsed}
          side={side}
          onClick={callback}
        />
      </CustomBox>

      <ContentWrapper column>{childrenWithProps}</ContentWrapper>
      <button type="button" onClick={() => displayForm(!isForm)}>
        ShowForms
      </button>
      {isForm && <FakeForm />}
    </Root>
  );
};

export default Toggle;
