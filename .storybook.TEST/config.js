import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Global } from '@emotion/core';
import { GlobalStyles, theme } from 'styles';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'emotion-theming';
import { addParameters } from '@storybook/react/dist/client/preview';
import { withPropsTable } from 'storybook-addon-react-docgen';

const req = require.context('../src/components', true, /.stories.js/);

addDecorator(storyFn => (
  <ThemeProvider theme={theme('fiori')}>
    <Global styles={GlobalStyles} />
    {storyFn()}
  </ThemeProvider>
));
// addDecorator(withInfo);
addDecorator(withPropsTable);

addParameters({
  props: {
    propTablesExclude: ['ThemeProvider', 'Story'],
  },
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
