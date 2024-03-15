import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({theme}) => ({
    background: theme.background.components,
    marginTop: '10vh',
}))
const StyledImg = styled('img')(({theme}) => ({
    width: '10vh',
    height: '10vh',
}))

const StyledTypoGraphy = styled(Typography)(({theme}) => ({
    color: theme.text.consoleText,
    fontFamily: `'Press Start 2P', cursive`,
}))

interface PlayerCardProps {
    userInfo: {
        name?: string;
        profileIconId?: number;
        // ... include other properties from userInfo that you might use
    };
}

export const PlayerCard = (props: PlayerCardProps) => {
    const { userInfo } = props;


    // Construct the URL for the profile icon
    // Replace 'VERSION' with the current version of the Riot API data dragon
    // https://ddragon.leagueoflegends.com/api/versions.json
    const iconUrl = `http://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/${userInfo.profileIconId}.png`;

    return (
        <>
            <StyledPaper>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <StyledImg src={iconUrl} alt="Profile Icon" />
                    </Grid>
                    <Grid item>
                        <StyledTypoGraphy>{`UserName: ${userInfo.name}`}</StyledTypoGraphy>
                    </Grid>
                </Grid>
            </StyledPaper>
 

        </>
    );
};

export default PlayerCard;