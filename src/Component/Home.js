import React from 'react';
import Card from './Card/Card';
import data from '../data.json';
import {useHistory} from 'react-router-dom';


const Home = () => {
    const history = useHistory();
    const handleTopBatsmen = () => {
        history.push('/orange-cap')
    }
    const handleTopWicketTaker = () => {
        history.push('/purple-cap')
    }
    const handleMostSixers = () => {
        history.push('/most-sixers')
    }
    const playersData = data.map( (data) => {
        let allData = [];
        let total_runs = 0, total_ball_played = 0, total_fours = 0, total_sixes = 0;
        let total_overs = 0, total_wickets = 0, total_runs_given = 0, strike_rate = 0;
        let bat_avg = 0, economy = 0, bowl_avg = 0;
        const performanceData = data.performances.map((performance) => {
            data.no_of_innings > 0 ? total_runs = total_runs + (performance.runs === '-' ? performance.runs = 0 : performance.runs) : total_runs = 0;
            data.no_of_innings > 0 ? total_ball_played = total_ball_played + (performance.ball_played === '-' ? performance.ball_played = 0 : performance.ball_played) : total_ball_played = 0;
            total_fours = total_fours + performance.fours;
            total_sixes += performance.sixes;
            total_overs += performance.overs;
            total_wickets += performance.wickets;
            total_runs_given += performance.runs_given;
            return (
               <> {performance}</>
            );
        });
        data.no_of_innings > 0 ? strike_rate = (total_runs / total_ball_played * 100).toFixed(2) : strike_rate = '-';
        bat_avg = data.no_of_innings - data.no_of_notout > 0 ? (total_runs / (data.no_of_innings - data.no_of_notout)).toFixed(2) : "-";
        economy = isNaN(total_runs_given / (total_overs%10 === 0 ? total_overs : total_overs +( total_overs%10 /6))) ? "-" : (total_runs_given / total_overs).toFixed(2);
        bowl_avg = total_wickets > 0 ? (total_runs_given / total_wickets).toFixed(2) : "-"
        allData.push({
            name : data.name,
            team : data.team,
            matches : data.performances.length,
            runs : total_runs,
            balls : total_ball_played,
            fours: total_fours,
            sixes : total_sixes,
            strikeRate: strike_rate,
            battingAvg : bat_avg,
            overs : total_overs,
            wickets : total_wickets,
            economy : economy,
            runsGiven : total_runs_given,
            bowlingAvg: bowl_avg,
        });
        return allData;
    })
    return(
        <>
            <button onClick={handleTopBatsmen}>Orange Cap</button>
            <button onClick={handleTopWicketTaker}>Purple Cap</button>
            <button onClick={handleMostSixers}>Most Sixers</button>
            <Card data={playersData}></Card>
            
        </>
    )
}

export default Home;