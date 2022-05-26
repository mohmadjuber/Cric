import React, { useContext } from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const MostFours = () => {
    const data = useContext(DataContext);
    let scoresArray = [];
        const fours = data.map((player, index) => {
            scoresArray.push({
                number: index,
                name : player[0].name, 
                team : player[0].team,
                matches: player[0].matches,
                fours : player[0].fours,
            });
            return player;
        })
        
        const MostFours = scoresArray.sort(function(a,b){ 
            if(a.fours === b.fours) { 
                if(a.matches === b.matches) {return 0;}
                else {
                    return a.matches > b.matches ? 1 : -1;
                }
            } else {
                return a.fours > b.fours ? -1 : 1;
            }
            
        })
        const top10 = MostFours.slice(0,10);
    return(
        <div style={{background : 'red'}}><h1>Most Fours</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default MostFours;