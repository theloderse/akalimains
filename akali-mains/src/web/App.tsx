import React from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';
import store from './logic/store';
import NavBar from './components/nav-bar/nav-bar';
import { theme, darkTheme } from './theme';
import { createGlobalStyle } from 'styled-components';
import PlayerSearch from './components/player-search';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const RootDiv = styled('div')(({theme}) => ({
    backgroundColor: theme.background.default,
    height: '100vh',
}));

const ThemedAppWrapper = () => {
    const currentTheme = useSelector(state => state.theme.theme);
  
    return (
      <ThemeProvider theme={currentTheme === 'light' ? theme : darkTheme}>
        <GlobalStyle />
        <RootDiv>
          <NavBar />
          <PlayerSearch />
        </RootDiv>
      </ThemeProvider>
    );
  };

export const App = () => {
    return (
        <Provider store={store}>
            <ThemedAppWrapper />
        </Provider>
    );
};