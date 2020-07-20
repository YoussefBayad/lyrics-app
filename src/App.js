import React, { useContext } from 'react';
import './App.css';
import Nav from './components/Nav';
import Tracks from './components/Tracks';
import { Context } from './context/Context';
import Fetch from './components/Fetch';
import More from './components/More';
import Spinner from './components/Spinner';

const App = () => {
  const { state } = useContext(Context);
  const { tracks } = state;
  return (
    <>
      <Nav />
      <Fetch />
      <div className="container">
        {tracks[1] !== undefined ? (
          <>
            <Tracks />
            <More />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default App;
