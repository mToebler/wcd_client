import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import ZoneList from "./components/pages/zoneList/ZoneList"
import Zone from "./components/pages/zone/Zone"
import Weather from "./components/pages/weather/Weather"
import "./app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/zone/:zoneId">
            <Zone />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
