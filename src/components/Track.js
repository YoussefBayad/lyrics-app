import React from 'react';

const Track = ({ track }) => {
  return (
    <div className="track">
      <h2>{track.track_name}</h2>
      <h3 className="artist-name">{track.artist_name}</h3>
      <h3>{track.album_name}</h3>
      <button>Show Lyrics</button>
    </div>
  );
};

export default Track;
