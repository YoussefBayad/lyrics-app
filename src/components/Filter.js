import React, { useEffect, useState } from 'react';

const Filter = () => {
  const [query, setQuery] = useState('');
  const [word, setWord] = useState('');
  const [search, setSearch] = useState([]);
  // const [autoFocus, setAutoFocus] = useState(false);

  useEffect(() => {
    if (query !== '') {
      const fetchItems = async () => {
        console.log('fetching');
        const res = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${query}%20bieber&page_size=5&page=1&s_track_rating=desc&apikey=cff244a568a3934e2cfbc75aed24c9a5`
        )
          .then((res) => res.json())
          .then((data) => data.message.body.track_list);
        setSearch(res);
      };
      fetchItems();
    }
  }, [query]);
  return (
    <div className="form">
      <input
        className={
          search.length > 0 ? 'form-control form-control-two' : 'form-control'
        }
        type="text"
        placeholder="Enter music or artist name... "
        // autoFocus={autoFocus}
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button className="btn" onClick={() => setQuery(word)}>
        Get Lyrics
      </button>
      <div className={search.length > 0 ? 'search-results' : 'display-none'}>
        {search.length > 0 &&
          search.map((track) => (
            <div key={track.track.track_id} className="result">
              {track.track.track_name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filter;
