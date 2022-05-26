import React, {useContext} from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const PurpleCap = () => {
    const playersData = useContext(DataContext);
    let scoresArray = [];
        // eslint-disable-next-line no-unused-vars
        const bowlers = playersData.map((player, index) => {
            scoresArray.push({
                number : index + 1,
                name : player[0].name, 
                team : player[0].team,
                matches: player[0].matches,
                wickets : player[0].wickets,
                bowling_avg : player[0].bowlingAvg,
                economy : player[0].economy
            });
            return player;
        })
        const topBowlers = scoresArray.sort(function(a,b){ 
            if(a.wickets === b.wickets) {
                if(a.economy === b.economy) {return 0}
                else{
                    return a.economy > b.economy ? 1 : -1;
                }
                
            } else {
                
            return a.wickets > b.wickets ? -1 : 1;
            }
        })
        console.log('top bowsera', topBowlers);
        const top10 = topBowlers.slice(0,10);
    return(
        <div style={{background : 'purple'}}><h1>Purple Cap</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default PurpleCap;