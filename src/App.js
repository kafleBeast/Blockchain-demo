import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Hash from './Hash';
import Pow from './Pow';
import Blocks from './Blocks';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
 
            <Route path = "/Hash">
              <Hash />
            </Route>

            <Route path = "/Pow">
              <Pow />
            </Route>

            <Route path = "/Blocks">
              <Blocks />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
