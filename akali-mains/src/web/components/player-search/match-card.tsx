import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const MatchPaper = styled(Paper)(({ theme }) => ({
    background: theme.background.components,
    marginTop: '1vh'
}));

interface MatchCardProps {
    matchId: string;
    playerId: string;
}

export const MatchCard = (props: MatchCardProps) => {
    const { matchId, playerId } = props;
    const [matchData, setMatchData] = useState([{}]);
    const [playerStats, setPlayerStats] = useState({ kills: 0, deaths: 0, assists: 0 });

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));


    const getMatchData = async (matchId: string, playerId: string) => {
        try {
            await delay(1000); // Delay to avoid hitting the rate limit

            const matchResponse = await axios.get(`/api/summoner/match/${matchId}`);
            const matchData = matchResponse.data;
            
            // Assuming matchData.participants is where player stats are stored
            const playerData = matchData.info.participants.find(p => p.puuid === playerId);

            if (playerData) {
                setPlayerStats({
                    kills: playerData.kills,
                    deaths: playerData.deaths,
                    assists: playerData.assists
                });
            }

            return matchResponse;

        } catch (error) {
            console.error('Error in fetching data:', error);
        }
    };

    useEffect(() => {
        getMatchData(matchId, playerId);
    }, [matchId, playerId]); // React to changes in either matchId or playerId

    return (
        <>
            <MatchPaper key={matchId}>
                {`Match ID: ${matchId}`}
                {`${JSON.stringify(playerStats)}`}
            </MatchPaper>
        </>
    );
};

export default MatchCard;