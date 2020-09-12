import React from 'react';
import './App.css';
// import MyContacts from './users/components/MyContacts';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
//import { blue, yellow } from '@material-ui/core/colors';
import AppContent from './layout/AppContent';
import { Router } from 'react-router-dom';
import history from './history';
import AppMenu from './layout/AppMenu';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FFC23C",
        contrastText: "white"
      },
      secondary: {
        main: "#FF5760",
        contrastText: "white"
      }
    },
})

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <AppMenu />
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;