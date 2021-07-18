import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import Cards from './Cards';

<<<<<<< HEAD
function Cards(props) {
 console.log(cardData);
 
 return (
 
        <div>

        </div>
 )
};
=======
const cards = () => (
    <body>
        <Switch>
            <Route exact path='/contacts' component={Cards} />
            <Route exact path='/contacts' component={Nav} />
        </Switch>
    </body>
)
>>>>>>> 3233ef326f19ea9c5917fcd23238789e2f0edcfa

export default Cards;


