import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Tracks from './components/Tracks';
import Lyrics from './components/Lyrics';
import Filter from './components/Filter';

const App = () => {
  return (
    <Router>
      <Nav />
      <Filter />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Tracks} />
          <Route path="/lyrics" component={Lyrics} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
