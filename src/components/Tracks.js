import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Tracks = () => {
  const { state } = useContext(Context);
  console.log(state);
  return <div>Hello</div>;
};

export default Tracks;
