import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Spinner from './Spinner';
const More = () => {
  const {
    increaseTracks,
    fMoreTracksOnLoading,
    state: { moreTracksOnLoading },
  } = useContext(Context);

  return (
    <div className={moreTracksOnLoading ? 'more more-is-loading' : 'more'}>
      {moreTracksOnLoading ? <Spinner /> : false}
      <button
        onClick={() => {
          increaseTracks();
          fMoreTracksOnLoading(true);
        }}
      >
        MoOoRe
      </button>
    </div>
  );
};

export default More;
