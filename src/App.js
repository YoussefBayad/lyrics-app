import React, { useEffect, useContext } from 'react';
import './App.css';
import Nav from './components/Nav';
import Tracks from './components/Tracks';
import { ContextProvider } from './context/Context';
import { Context } from './context/Context';
import Fetch from './components/Fetch';

const App = () => {
  return (
    <ContextProvider>
      <Nav />
      <div className="container">
        <Fetch />
        <Tracks />
      </div>
    </ContextProvider>
  );
};

export default App;
