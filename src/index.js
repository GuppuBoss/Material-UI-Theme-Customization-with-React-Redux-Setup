import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './routes/index';
import 'typeface-roboto';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { NavigationBar } from '../src/containers/Navigation'
render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <NavigationBar />
            <App />
        </ThemeProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
