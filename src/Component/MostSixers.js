import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const MostSixers = () => {
    const data = useContext(DataContext);
    let scoresArray = [];
        const sixes = data.map((player, index) => {
            scoresArray.push({
                number: index,
                name : player[0].name, 
                team : player[0].team,
                matches : player[0].matches,
                sixes : player[0].sixes,
                
            });
            return player;
        })
        
        const mostSixers = scoresArray.sort(function(a,b){ return b.sixes - a.sixes})
        const top10 = mostSixers.slice(0,10);
    return(
        <div style={{background : 'red'}}><h1>Most Sixers</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default MostSixers;