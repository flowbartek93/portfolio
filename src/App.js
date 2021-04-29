import React from "react";
import Home from "./Components/Home";
import MyProjects from "./Components/MyProjects";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/myprojects">
          <MyProjects />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
