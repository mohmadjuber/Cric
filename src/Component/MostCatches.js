import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const MostCatches = () => {
    const data = useContext(DataContext);
    let scoresArray = [];
        // eslint-disable-next-line no-unused-vars
        const dismissal = data.map((player, index) => {
            const stumping = player[0].stumping ? player[0].stumping : 0;
            const run_outs = player[0].run_outs ? player[0].run_outs : 0;
            const dismissal_copy = player[0].catches + run_outs + stumping;
            scoresArray.push({
                number: index,
                name : player[0].name, 
                team : player[0].team,
                matches : player[0].matches,
                dismissal : dismissal_copy
            });
            return player;
        })
        
        const MostCatches = scoresArray.sort(function(a,b){ return b.dismissal - a.dismissal})
        const top10 = MostCatches.slice(0,10);
        
    return(
        <div style={{background : 'red'}}><h1>Most dismissal</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default MostCatches;