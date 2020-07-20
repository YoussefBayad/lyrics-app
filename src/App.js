import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Tracks from './components/Tracks';
import Lyrics from './components/Lyrics';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <div className="container">
          <Route exact path="/" component={Tracks} />
          <Route exact path="/lyrics" component={Lyrics} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
