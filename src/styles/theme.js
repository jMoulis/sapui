import fiori from './fiori';

export const breakpoints = { xs: 576, sm: 768, md: 992, lg: 1200 };
const mediaQueries = Object.keys(breakpoints).reduce((response, key) => {
  return {
    ...response,
    [key]: `@media (min-width: ${breakpoints[key]}px)`,
  };
}, {});

const getActualTheme = {
  fiori,
};

const theme = currentTheme => {
  return {
    ...getActualTheme[currentTheme],
    breakpoints,
    base: {},
    mediaQueries,
  };
};

export default theme;
