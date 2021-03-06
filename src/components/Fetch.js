import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Context';
const Fetch = () => {
  const {
    state: { tracksNumber },
    updateState,
    fMoreTracksOnLoading,
  } = useContext(Context);
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=${tracksNumber}&country=us&f_has_lyrics=1&apikey=cff244a568a3934e2cfbc75aed24c9a5 `
      )
        .then((res) => res.json())
        .then((data) => data.message.body.track_list);
      updateState(res);
      fMoreTracksOnLoading(false);
    };

    fetchItems();
  }, [tracksNumber]);
  return <></>;
};

export default Fetch;
