import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import History from "./utils/History";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/Persons" component={PersonList}></Route>;
        <Route path="/" component={ThemeSwitcher}></Route>
        <Route exact path="/user-list" component={PersonList}></Route>;
        <Route path="/contact" component={Contacts}></Route>
      </Switch>
    </Router>
  );
};

export default App;
