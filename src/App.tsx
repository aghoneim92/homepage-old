import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
