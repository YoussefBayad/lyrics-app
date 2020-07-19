import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Tracks = () => {
  const { state } = useContext(Context);
  console.log(state);
  return (
    <div>
      {state[1] !== undefined ? (
        <li>{state[1].track.album_name}</li>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Tracks;
