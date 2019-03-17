import belize from './belize';

const breakpoints = { xs: 576, sm: 768, md: 992, lg: 1200 };
const mediaQueries = Object.keys(breakpoints).reduce((response, key) => {
  return {
    ...response,
    [key]: `@media (max-width: ${breakpoints[key]}px)`,
  };
}, {});

const colors = {
  primary: 'hotpink',
  white: '#ffffff',
  black: '#000000',
};

const getActualTheme = {
  belize,
};

const theme = currentTheme => {
  return {
    colors,
    customTheme: {
      ...getActualTheme[currentTheme],
    },
    base: {},
    mediaQueries,
  };
};

export default theme;
