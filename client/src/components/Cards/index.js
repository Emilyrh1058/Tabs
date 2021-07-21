// import React, { useState, useEffect } from "react";
import cardData from "../../utils/cardData";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav";
const Cards = () => (
    <body>
        <Switch>
            <Route exact path='/contacts' component={Cards} />
            <Route exact path='/contacts' component={Nav} />
        </Switch>
    </body>
)

export default Cards;
