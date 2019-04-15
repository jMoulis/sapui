import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'emotion-theming';
import '@babel/polyfill';
import store from 'store';
import { App } from 'components/App';
import { ErrorBoundary } from 'services/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import './i18n';

const currentTheme = 'fiori';

console.log(theme(currentTheme));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme(currentTheme)}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
