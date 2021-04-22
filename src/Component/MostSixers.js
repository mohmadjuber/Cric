import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const MostSixers = () => {
    const data = useContext(DataContext);
    let scoresArray = [];
    let trialArray = [];
        const trial = data.map((abc) => {
            if(abc.team === 'Mumbai Indians'){
                trialArray.push(abc);
            }
            return trialArray;
        });
        console.log("Trial Array", trialArray);
        const sixes = data.map((player, index) => {
            let total_sixes = 0;
            const scores = player.performances.map((performance) => {
                total_sixes += performance.sixes;
                return performance;
            });
            scoresArray.push({
                name : player.name, 
                team : player.team,
                sixes : total_sixes,
                number: index
            });
            return player;
        })
        
        const mostSixers = scoresArray.sort(function(a,b){ return b.sixes - a.sixes})
        const top10 = mostSixers.slice(0,10);
        console.log("array", top10);
    return(
        <div style={{background : 'red'}}><h1>Most Sixers</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default MostSixers;