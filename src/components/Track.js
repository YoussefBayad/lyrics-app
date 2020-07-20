import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const Track = ({ track }) => {
  const { updateArtistAndTrack, lyricsLoading } = useContext(Context);
  return (
    <div className="track">
      <h2>{track.track_name}</h2>
      <h3 className="artist-name">{track.artist_name}</h3>
      <h5>Album : {track.album_name}</h5>
      <Link to="/lyrics">
        <button
          onClick={() => {
            updateArtistAndTrack(track.artist_name, track.track_name);
            lyricsLoading(true);
          }}
        >
          Show Lyrics
        </button>
      </Link>
    </div>
  );
};

export default Track;
