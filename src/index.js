import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from 'App';
import theme from 'styles/theme';
import { store } from './state';

const root = document.getElementById('app');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
