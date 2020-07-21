import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Track from './Track';
import Spinner from './Spinner';
import More from './More';
import Fetch from './Fetch';

const Tracks = () => {
  const {
    state: { tracks },
  } = useContext(Context);
  return (
    <>
      <Fetch />
      {Object.keys(tracks).length !== 0 ? (
        <>
          <div className={Object.keys(tracks).length !== 0 ? 'tracks' : ''}>
            {tracks.map((ob) => (
              <Track key={ob.track.track_id} track={ob.track} />
            ))}
          </div>
          <More />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Tracks;
