import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "materialize-css";
import Dashboard from "./books/dashboard";
import Login from "./auth/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
