import React from 'react'
import { AppBar,Typography } from '@mui/material'
import Typewriter from "typewriter-effect";
import {styled} from '@mui/material/styles'
import AkaliGif from '../../images/akali.gif'

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.background.navBar,
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',   
}))

const ImageContainer = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '80vh',
    position: 'absolute'
}))
const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: `'Press Start 2P', cursive`,
    color: theme.text.consoleText,
    marginRight: '10vh',
}))

export const NavBar = () => {
    return(
        <div>
            
        </div>
    )
}

export default NavBar;