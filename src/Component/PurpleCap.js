import React, {useContext} from 'react';
import NewCard from './Card/NewCard';
import DataContext from './DataContext';
const PurpleCap = () => {
    const playersData = useContext(DataContext);
    console.log("context", playersData);
    let scoresArray = [];
        const bowlers = playersData.map((player) => {
            let economy_rate = 0, bowling_avg = 0,total_wickets = 0, total_overs = 0, total_runs_given = 0;
            const scores = player.performances.map((performance) => {
                
                total_wickets += performance.wickets;
                total_overs += performance.overs;
                total_runs_given += performance.runs_given;
                return performance;
            });
            economy_rate = isNaN(total_runs_given / (total_overs%10 === 0 ? total_overs : total_overs +( total_overs%10 /6))) ? "-" : (total_runs_given / total_overs).toFixed(2);
            bowling_avg = (total_runs_given / total_wickets).toFixed(2);    
            scoresArray.push({
                name : player.name, 
                team : player.team,
                wickets : total_wickets,
                bowling_avg : bowling_avg,
                economy : economy_rate
            });
            return player;
        })
        const topBowlers = scoresArray.sort(function(a,b){ 
           if(a.wickets > b.wickets) return -1;
           if(a.wickets < b.wickets) return 1;
           if(a.wickets === b.wickets) {
               if(a.economy > b.economy) return 1;
               if(a.economy < b.economy) return -1;
           }
           return 0;
        })
        const top10 = topBowlers.slice(0,10);
    return(
        <div style={{background : 'purple'}}><h1>Purple Cap</h1>
        <NewCard data= {top10}></NewCard>
        </div>
    );
}

export default PurpleCap;