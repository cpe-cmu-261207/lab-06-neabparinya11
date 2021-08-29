import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutMe from './components/About';
import Currents from './components/Current';
import Histories from './components/History';
import Selected from './components/Selected';
import Result from './components/Results';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Currents/>
        </Route>
      <Route path="/current" >
        <Currents />
      </Route>
      <Route path="/history/select">
        <Selected />
      </Route>
      <Route path="/history/result">
        <Result />
      </Route>
      <Route path="/about">
        <AboutMe />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
