import React from 'react'
import { ThemeProvider, styled } from '@mui/material/styles'
import NavBar from './components/nav-bar/nav-bar'
import theme from './theme'

const RootDiv = styled('div')(({theme}) => ({
    backgroundColor: theme.background.default,
    height: '100vh',
}))

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RootDiv>
                <NavBar></NavBar>
            </RootDiv>
        </ThemeProvider>
    )
}