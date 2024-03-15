import React, { useEffect, useState } from 'react'
import { Grid, TextField, Typography} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Search } from '@mui/icons-material'
import axios from 'axios';
import PlayerCard from './player-card';
import MatchCard from './match-card';


const RootDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column', // Changed to column for better content flow
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Changed from 'height' to 'minHeight'
    overflowY: 'auto',
}))

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.text.consoleText,
    fontFamily: `'Press Start 2P', cursive`,
}))

const StyledTextField = styled(TextField)(({theme}) => ({
    background: theme.background.components,
    borderRadius: '10px 10px 10px 10px',
    width: '50vh',
    '& .MuiInputBase-input': {
        color: theme.text.inputText,
        fontFamily: `'Press Start 2P', cursive`,
    },
}))

const StyledSearch = styled(Search)(({theme}) => ({
    width: '5vh',
    height: '5vh'
}))

export const PlayerSearch = () => {
    const [summonerName, setSummonerName] = useState('')
    const [userInfo, setUserInfo] = useState([{}])
    const [matchesId, setMatchesId] = useState([{}])
    const [matchData, setMatchData] = useState([{}])
    const [playerId, setPlayerId] = useState('')
    const handleSearch = async () => {
        try {
            // First request to get user info and puuid
            const userInfoResponse = await axios.get(`/api/summoner/${summonerName}`);
            setUserInfo(userInfoResponse.data);
    
            const puuid = userInfoResponse.data.puuid; // Assuming puuid is a field in the response
            console.log('puuid', puuid)
            setPlayerId(puuid)
            // Second request to get user's match info using puuid
            const matchInfoResponse = await axios.get(`/api/summoner/${puuid}/matches`);
            console.log('matchs??:', matchInfoResponse)
            setMatchesId(matchInfoResponse.data);
        } catch (error) {
            console.error('Error in fetching data:', error);
        }
    }

    const handleTextFieldChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSummonerName(event?.target.value)
    }
    console.log(matchesId)
    return(
        <RootDiv>
            <Grid container justifyContent="center" alignItems="center" flexDirection="column">
                <Grid item>
                    <StyledTypography>Search Player:</StyledTypography>
                    <StyledTextField
                        value={summonerName}
                        onChange={handleTextFieldChange}
                        placeholder={"Enter summoner name."}/>
                    <StyledSearch onClick={() => handleSearch()}/>  
                </Grid>
                <Grid item>
                <PlayerCard userInfo={userInfo}></PlayerCard>
                {matchesId.map((matchId: any) => (
                    <MatchCard matchId={matchId} playerId={playerId}></MatchCard>
                ))}
                </Grid>
            </Grid>
        </RootDiv>
    )
}

export default PlayerSearch;