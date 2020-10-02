import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import themeObject from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import ContextProvider from './context/ContextProvider';
const theme = createMuiTheme(themeObject);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ContextProvider>
    <App />
    </ContextProvider>
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
