import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import ZoneList from "./components/pages/zoneList/ZoneList"
import "./app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/zones">
            <ZoneList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
