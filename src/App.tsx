import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MyListPage from "./pages/MyListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/movie/:id" component={MovieDetailsPage} />
          <Route exact path="/mylist" component={MyListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
