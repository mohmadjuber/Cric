import React from "react";

const PointsTable = () => {
    return(
        <div style={{background : 'red'}}><h1>Points Table</h1>
            <div class="rank">Rank</div>
            <div class="rank">Team</div>
            <div class="rank">Win</div>
            <div class="rank">Loss</div>
            <div class="rank">No result</div>
            <div class="rank">Points</div>
            <div class="rank">Net Run Rate</div>
        </div>
    );
}

export default PointsTable;