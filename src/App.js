import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./model/home";
import User from "./model/user";
import Banner from "./model/Banner";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={User} />
          <Route path="/banner" component={Banner} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
