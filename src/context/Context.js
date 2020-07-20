import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

//initial state
const initialState = {
  tracks: [],
  tracksNumber: 5,
  moreTracksOnLoading: false,
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
  const increaseTracks = (bool) => {
    dispatch({
      type: 'ADD_MORE',
      moreTracksOnLoading: bool,
    });
  };
  const fMoreTracksOnLoading = (bool) => {
    dispatch({
      type: 'MORE_LOADING',
      moreTracksOnLoading: bool,
    });
  };

  return (
    <Context.Provider
      value={{ state, updateState, increaseTracks, fMoreTracksOnLoading }}
    >
      {props.children}
    </Context.Provider>
  );
};
