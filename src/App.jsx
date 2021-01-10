import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
