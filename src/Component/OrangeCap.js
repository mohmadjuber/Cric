import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const OrangeCap = () => {
    const orange = 'orange';
    const data = useContext(DataContext);
    let scoresArray = [];
    const HighestScore = data.map((player, index) => {
        scoresArray.push({
            number: index + 1,
            name : player[0].name, 
            team : player[0].team,
            matches: player[0].matches,
            runs: player[0].runs,
            balls: player[0].balls,
            fours: player[0].fours,
            sixes: player[0].sixes,
            avg: player[0].battingAvg,
            srate: player[0].strikeRate
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