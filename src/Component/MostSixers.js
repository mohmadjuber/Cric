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
        
        const mostSixers = scoresArray.sort(function(a,b){ 
            if(a.sixes === b.sixes) {
                if(a.matches === b.matches) {return 0;}
                else {
                    return a.matches > b.matches ? 1 :-1;
                }
            } else {
                return a.sixes > b.sixes ? -1 : 1;
            }
            })
        const top10 = mostSixers.slice(0,10);
    return(
        <div style={{background : 'red'}}><h1>Most Sixers</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default MostSixers;