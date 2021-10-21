import React from 'react';
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mainTheme } from './themes/mainTheme';
import { routePath } from './router/routes';
import { Main } from './components/Main/Main';

import './index.css';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const AppContent = () => {
  return (
    <Switch>
      <Route exact path={routePath.Home}>
        <Main />
      </Route>
    </Switch>
  );
};

export const App = () => {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={mainTheme}>
          <AppContent />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
};
