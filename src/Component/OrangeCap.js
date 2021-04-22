import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const OrangeCap = () => {
    const orange = 'orange';
    const data = useContext(DataContext);
    let scoresArray = [];
        const HighestScore = data.map((player) => {
            let total_runs = 0, total_ball_played = 0, total_fours = 0, total_sixes = 0, battingAvg = 0, strikerate= 0;
            const scores = player.performances.map((performance) => {
                player.no_of_innings > 0 ? total_runs = total_runs + (performance.runs === '-' ? performance.runs = 0 : performance.runs) : total_runs = 0;
                player.no_of_innings > 0 ? total_ball_played = total_ball_played + (performance.ball_played === '-' ? performance.ball_played = 0 : performance.ball_played) : total_ball_played = 0;
                player.no_of_innings > 0 ? strikerate = ((total_runs / total_ball_played)*100).toFixed(2) : strikerate = "-";
                player.no_of_innings - player.no_of_notout > 0 ? battingAvg = (total_runs / (player.no_of_innings - player.no_of_notout)).toFixed(2) : battingAvg = "-";
                total_fours = total_fours + performance.fours;
                total_sixes += performance.sixes;
                
                return performance;
            });
            scoresArray.push({
                name : player.name, 
                team : player.team,
                runs: total_runs,
                balls: total_ball_played,
                fours: total_fours,
                sixes: total_sixes,
                avg: battingAvg,
                srate: strikerate
            });
            return player;
        })
        const topBatsmen = scoresArray.sort(function(a,b){ return b.runs - a.runs})
        const top10 = topBatsmen.slice(0,10);
    return(
        <div style={{background: orange}}><h1>Orange Cap</h1>
        
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default OrangeCap;