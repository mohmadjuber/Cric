import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
import Home from './Home';
import OrangeCap from './OrangeCap';
import PurpleCap from './PurpleCap';
import MostSixers from './MostSixers';
const AppRoutes = () => {
    return(
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/orange-cap' component= {OrangeCap} />
                <Route path='/purple-cap' component= {PurpleCap} />
                <Route path='/most-sixers' component= {MostSixers} />
                <Route component= {Home} />
            </Switch>
        </>
    );
}

export default AppRoutes;