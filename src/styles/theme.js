const breakpoints = { xs: 576, sm: 768, md: 992, lg: 1200 };
const mediaQueries = Object.keys(breakpoints).reduce((response, key) => {
  return {
    ...response,
    [key]: `@media (max-width: ${breakpoints[key]}px)`,
  };
}, {});

const theme = {
  colors: {
    primary: 'hotpink',
  },
  buttons: {
    emphasized: {
      hover: {
        backgroundColor: '#418ac7',
        border: '#418ac7',
      },
    },
  },
  mediaQueries,
};

export default theme;
