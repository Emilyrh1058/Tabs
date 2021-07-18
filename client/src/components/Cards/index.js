import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import Cards from './Cards';

const cards = () => (
    <body>
        <Switch>
            <Route exact path='/contacts' component={Cards} />
            <Route exact path='/contacts' component={Nav} />
        </Switch>
    </body>
)

export default Cards;


