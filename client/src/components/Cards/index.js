import React from "react";
import { Switch, Route } from "react-router-dom";
import Background from "../Background";
import Home from "../Home";
import Nav from "../Nav";
import Cards from "./Cards";

const cards = () => (
  <body>
    <Switch>
      <Route exact path="/" component={Background} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/contacts" component={Cards} />
      <Route exact path="/contacts" component={Nav} />
    </Switch>
  </body>
);

export default Cards;
