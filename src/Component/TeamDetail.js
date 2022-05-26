import React, { useContext} from 'react';
import DataContext from './DataContext';
import NewCard from './Card/NewCard';

const TeamDetail = () => {
    const data = useContext(DataContext);
    const teamName = window.location.pathname.split("/")[1].replace(/%20/g, " ");
    let teamArray =[]
    const team = data.filter((player) => {return player[0].team === teamName});
    console.log('team', data);
    // eslint-disable-next-line no-unused-vars
    const teamArrayMap = team.map((player) => {
        teamArray.push({
            name : player[0].name, 
            team : player[0].team,
            matches: player[0].matches,
            runs: player[0].runs,
            balls: player[0].balls,
            fours: player[0].fours,
            sixes: player[0].sixes,
            avg: player[0].battingAvg,
            srate: player[0].strikeRate,
            overs: player[0].overs,
            wickets : player[0].wickets,
            economy : player[0].economy,
            runs_given : player[0].runsGiven,
            bowling_avg: player[0].bowlingAvg,
            dismissal: player[0].catches + player[0].run_outs

        });
        
        return true;
    })
    
    const sortedTeam = teamArray.sort(function(a,b){
        return b.runs - a.runs;
    })
    
    return(<NewCard data={sortedTeam}></NewCard>)
}

export default TeamDetail;