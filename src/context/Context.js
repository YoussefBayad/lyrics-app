import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

//initial state
const initialState = {
  track: {
    album_id: 38636038,
    album_name: 'MAP OF THE SOUL : 7 ~ THE JOURNEY ~',
    artist_id: 24410130,
    artist_name: 'BTS',
    commontrack_id: 112521588,
    explicit: 0,
    has_lyrics: 1,
  },
};

// create context
export const Context = createContext(initialState);

// create Provider
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const updateState = (res) => {
    dispatch({
      type: 'UPDATE',
      payload: res,
    });
  };

  return (
    <Context.Provider value={{ state, updateState }}>
      {props.children}
    </Context.Provider>
  );
};
