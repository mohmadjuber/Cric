import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
import Home from './Home';
import OrangeCap from './OrangeCap';
import PurpleCap from './PurpleCap';
import MostSixers from './MostSixers';
import MostFours from './MostFours';
import TeamDetail from './TeamDetail';
import MostCatches from './MostCatches';
const AppRoutes = () => {
    return(
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/orange-cap' component= {OrangeCap} />
                <Route path='/purple-cap' component= {PurpleCap} />
                <Route path='/most-sixers' component= {MostSixers} />
                <Route path='/most-fours' component= {MostFours} />
                <Route path='/most-catches' component= {MostCatches} />
                <Route path='/Mumbai Indians' component= {TeamDetail} />
                <Route path='/Royal Challengers Banglore' component= {TeamDetail} />
                <Route path='/Chennai Super Kings' component= {TeamDetail} />
                <Route path='/Rajasthan Royals' component= {TeamDetail} />
                <Route path='/Punjab Kings' component= {TeamDetail} />
                <Route path='/Delhi Capitals' component= {TeamDetail} />
                <Route path='/Kolkata Knight Riders' component= {TeamDetail} />
                <Route path='/Sunrisers Hyderabad' component= {TeamDetail} />
                
                <Route component= {Home} />
            </Switch>
        </>
    );
}

export default AppRoutes;