import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      background: {
        default: string;
        navBar: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        background?: {
            default?: string;
            navBar?: string;
      };
    }
  }

  const theme = createTheme({
    background: {
        default: 'black',
        navBar: '#303030',
    },
  });

  export default theme;
  