import React from 'react';
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
    const handleMostFours = () => {
        history.push('/most-fours')
    }
    const handleTeams = value => () => {
        history.push('/'+ value)
    }
    const handleMostCatches = () => {
        history.push('/most-catches')
    }
    const handlePointTable = () => {
        history.push('/points-table')
    }
    return(
        <div>
        
            <button onClick={handleTopBatsmen}>Orange Cap</button>
            <button onClick={handleTopWicketTaker}>Purple Cap</button>
            <button onClick={handleMostSixers}>Most Sixers</button>
            <button onClick={handleMostFours}>Most Fours</button>
            <button onClick={handleMostCatches}>Most Catches</button>
            <button onClick={handleTeams('Mumbai Indians')}>Mumbai Indians</button>
            <button onClick={handleTeams('Royal Challengers Banglore')}>Royal Challengers Banglore</button>
            <button onClick={handleTeams('Chennai Super Kings')}>Chennai Super Kings</button>
            <button onClick={handleTeams('Rajasthan Royals')}>Rajasthan Royals</button>
            <button onClick={handleTeams('Punjab Kings')}>Punjab Kings</button>
            <button onClick={handleTeams('Delhi Capitals')}>Delhi Capitals</button>
            <button onClick={handleTeams('Kolkata Knight Riders')}>Kolkata Knight Riders</button>
            <button onClick={handleTeams('Sunrisers Hyderabad')}>Sunrisers Hyderabad</button>
            <button onClick={handleTeams('Lucknow Super Giants')}>Lucknow Super Giants</button>
            <button onClick={handleTeams('Gujarat Titans')}>Gujarat Titans</button>
            <button onClick={handlePointTable}>Points Table</button>
        </div>
    )
}

export default Home;