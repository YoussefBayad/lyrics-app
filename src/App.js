import React, { useEffect, useContext } from 'react';
import './App.css';
import Nav from './components/Nav';
import Tracks from './components/Tracks';
import { ContextProvider } from './context/Context';
import { Context } from './context/Context';

const App = () => {
  const { state, updateState } = useContext(Context);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=cff244a568a3934e2cfbc75aed24c9a5'
      )
        .then((res) => res.json())
        .then((data) => updateState(data.message.body.track_list));
      console.log(res);
    };

    fetchItems();
  }, []);
  return (
    <ContextProvider>
      <Nav />
      <Tracks />
      <div className="container"></div>
    </ContextProvider>
  );
};

export default App;
