import styled from '@emotion/styled';

const setWidth = ({ side, collapsed }) => {
  if (side === 'bottom') return '100%';
  if (collapsed) return 0;
  if (!collapsed && (side === 'bottom' || side === 'top')) return '100%';
  return '20rem';
};

const setheight = ({ side, collapsed }) => {
  if (side !== 'bottom') return '100%';
  if (collapsed) return 0;
  if (!collapsed && (side === 'bottom' || side === 'top')) return '20rem';
  return '100%';
};

const Root = styled.aside`
  label: Toogle;
  background-color: ${({ theme }) => theme.colors.action.secondary};
  grid-area: ${({ side }) => side};
  width: ${({ collapsed, hidden, width }) => {
    if (hidden) {
      if (collapsed) return 0;
      return width || '20rem';
    }
    return collapsed ? '5rem' : width || '20rem';
  }};
  transition: ${({ isResizing }) => !isResizing && 'all 200ms ease-in-out'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${({ theme, side, collapsed }) => {
    return {
      [theme.mediaQueries.xs]: {
        position: 'absolute',
        zIndex: 1,
        top: side !== 'bottom' && 0,
        bottom: 0,
        left: (side === 'left' || side === 'bottom' || side === 'top') && 0,
        right: (side === 'right' || side === 'bottom' || side === 'top') && 0,
        width: setWidth({ collapsed, side }),
        height: setheight({ collapsed, side }),
      },
    };
  }}
`;

export default Root;
