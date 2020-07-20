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
      {tracks[1] !== undefined ? (
        <>
          <div className={tracks[1] !== undefined ? 'tracks' : ''}>
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
