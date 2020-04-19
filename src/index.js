// React Utils
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

// CSS Resets
import { Global } from './components/Global/Global.styles';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global>
        <App />
      </Global>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
