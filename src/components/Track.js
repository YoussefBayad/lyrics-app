import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ track }) => {
  return (
    <div className="track">
      <h2>{track.track_name}</h2>
      <h3 className="artist-name">{track.artist_name}</h3>
      <h5>Album : {track.album_name}</h5>
      <Link to="/lyrics">
        <button>Show Lyrics</button>
      </Link>
    </div>
  );
};

export default Track;
