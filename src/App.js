import React from "react";
import "./App.css";
import Home from "./Home";
import SearchPage from "./SearchPage";
import SearchImagePage from "./SearchImagePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
require("dotenv").config();

console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/images">
            <SearchImagePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
