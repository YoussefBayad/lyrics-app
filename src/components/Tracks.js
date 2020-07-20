import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Track from './Track';
import Spinner from './Spinner';

const Tracks = () => {
  const { state } = useContext(Context);
  const { tracks } = state;
  console.log(tracks);
  return (
    <div className={tracks[1] !== undefined ? 'tracks' : ''}>
      {tracks[1] !== undefined ? (
        tracks.map((ob) => <Track key={ob.track.album_id} track={ob.track} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Tracks;
