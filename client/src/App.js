import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Favorites from "./pages/Favorites";

import Nav from "./components/Nav";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path={["/", "/search"]}>
            <Books />
          </Route>

          <Route exact path={["/", "/favorites"]}>
            <Favorites />
          </Route>

          <Route>
            <NoMatch />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
