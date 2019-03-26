import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from 'app';
import theme from 'styles/theme';

const root = document.getElementById('app');

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    root
);

if (module.hot) {
    module.hot.accept();
}
