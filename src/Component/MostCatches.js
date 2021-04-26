import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const MostCatches = () => {
    const data = useContext(DataContext);
    let scoresArray = [];
        const catches = data.map((player, index) => {
            scoresArray.push({
                number: index,
                name : player[0].name, 
                team : player[0].team,
                matches : player[0].matches,
                catches : player[0].catches,
            });
            return player;
        })
        
        const MostCatches = scoresArray.sort(function(a,b){ return b.catches - a.catches})
        const top10 = MostCatches.slice(0,10);
    return(
        <div style={{background : 'red'}}><h1>Most Catches</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default MostCatches;