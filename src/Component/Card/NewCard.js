import '../Card/Card.css';
import data from '../../data/data-2022.json';

const NewCard = (playerData) => {
    return(
        <div className="player-container" >
            {playerData.data.map((player, index) => {
                return (
                    <div className={ player.team ? 'player '+ player.team : 'player'} key={data.id}>
                        <div className="player-runs">Number: {index + 1}</div>
                        <div className="player-name">Name: {player.name}</div>
                        <div className="player-team">Team: {player.team}</div>
                        <div className="player-name">Matches: {player.matches}</div>
                        {player.runs ? <div className="player-runs">Runs: {player.runs}</div> : null}
                        {player.balls ? <div className="player-ball-played">Balls: {player.balls}</div> : null}
                        {player.fours ? <div className="player-fours">Fours: {player.fours}</div> : null}
                        {player.sixes ? <div className="player-sixes">Sixes: {player.sixes}</div> : null}
                        {player.avg ? <div className="player-sixes">Avg: {player.avg}</div> : null}
                        {player.srate ? <div className="player-sixes">S/R: {player.srate}</div> : null}
                        {player.wickets ? <div className="player-sixes">Wickets: {player.wickets}</div> : null}
                        {player.bowling_avg ? <div className="player-sixes">Avg: {player.bowling_avg}</div> : null}
                        {player.economy ? <div className="player-sixes">Economy Rate: {player.economy}</div> : null}
                        {player.dismissal ? <div className="player-sixes">Dismissal: {player.dismissal}</div> : null}
                    </div>
                )
            })}
            
        </div>
    )
}

export default NewCard;