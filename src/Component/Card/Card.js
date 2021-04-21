import React from 'react';
import '../Card/Card.css';
import data from '../../data.json';

const Card = (playerData) => {
    return(
        <div className="player-container">
            {playerData.data.map((player) => {
                return (
                    <div className="player" key={data.id}>
                        <div className="player-name">Name: {player[0].name}</div>
                        <div className="player-team">Team: {player[0].team}</div>
                        <div className="player-team">Matches: {player[0].matches}</div>
                        <div className="player-runs">Runs: {player[0].runs}</div>
                        <div className="player-ball-played">Balls: {player[0].balls}</div>
                        <div className="player-fours">Fours: {player[0].fours}</div>
                        <div className="player-sixes">Sixes: {player[0].sixes}</div>
                        <div className="player-strike-rate">S/R: {player[0].strikeRate} </div>
                        <div className="player-average">Avg: {player[0].battingAvg}</div>
                        <div className="player-overs">Overs: {player[0].overs}</div>
                        <div className="player-wickets">wickets: {player[0].wickets}</div>
                        <div className="player-runs-average">Economy: {player[0].economy}</div>
                        <div className="player-strike-rate">Avg.: {player[0].bowlingAvg}</div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Card;