import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../src/components/pages/LandingPage";
import MintingPage from "./components/pages/MintingPage";


function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/minting">
            <MintingPage />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;