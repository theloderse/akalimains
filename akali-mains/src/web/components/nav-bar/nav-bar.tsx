import React from 'react'
import { AppBar,Typography } from '@mui/material'
import Typewriter from "typewriter-effect";
import {styled} from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.background.navBar,
    height: '10vh',
}))

export const NavBar = () => {
    return(
        <div>
            <StyledAppBar>
                <Typography>
                    <Typewriter
                    onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Akali Mains")
                        .start();
                }}/>
                </Typography>
            </StyledAppBar>
        </div>
    )
}

export default NavBar;