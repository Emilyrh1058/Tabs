import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cards from './Cards';

const cards = () => (
    <body>
        <Switch>
            <Route exact path='/contacts' component={Cards} />
        </Switch>
    </body>
)

export default Cards;
