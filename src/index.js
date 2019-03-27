import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'state/sagas';
import App from 'App';
import theme from 'styles/theme';
import reducer from 'state/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

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
