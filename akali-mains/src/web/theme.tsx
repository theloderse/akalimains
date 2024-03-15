import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      background: {
        default: string;
        navBar: string;
        components: string;
      };
      text: {
        consoleText: string,
        inputText: string,
      }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        background?: {
            default?: string;
            navBar?: string;
            components?: string;
      };
      text?: {
        consoleText?: string;
        inputText?: string;
      }
    }
  }

  export const darkTheme = createTheme({
    background: {
        default: '#222224',
        navBar: 'black',
        components: '#454547'
    },
    text: {
      consoleText: 'green',
      inputText: 'white'
    }
  });

  export const theme = createTheme({
    background: {
      default: '#F2F1EB',
      navBar: '#AFC8AD',

      components: '#EEE7DA'
  },
  text: {
    consoleText: '#739178',
    inputText: '#516654'
  }
  })

  