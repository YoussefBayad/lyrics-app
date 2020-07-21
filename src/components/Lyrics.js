import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Context';

import Spinner from './Spinner';
import { Link } from 'react-router-dom';
const Lyrics = () => {
  const {
    state: { artist },
    state: { track },
    state: { lyrics },
    state: { lyricsIsLoading },
    updateLyrics,
    lyricsLoading,
  } = useContext(Context);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${track}%20and%20i%20know%20it&q_artist=${artist}&apikey=cff244a568a3934e2cfbc75aed24c9a5 `
      )
        .then((res) => res.json())
        .then((data) =>
          Object.keys(data.message.body).length === 0
            ? 'failed'
            : data.message.body.lyrics.lyrics_body
        );
      console.log(res);

      updateLyrics(res);
      lyricsLoading(false);
    };

    fetchItems();
  }, []);
  return (
    <>
      <div className="lyrics">
        <h2>{track}</h2>
        <h3>{artist}</h3>
        {lyricsIsLoading ? <Spinner /> : <p>{lyrics}</p>}
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="btn">Back Home</button>
      </Link>
    </>
  );
};

export default Lyrics;
