import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import './App.css';
import Users from "./user/pages/Users";
import User from "./user/pages/User";

function App() {
  return (
      <Router>
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/user/:userId" exact>
              <User />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
      );
}

export default App;
