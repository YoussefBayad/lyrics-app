import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

//initial state
const initialState = {
  tracks: [],
  tracksNumber: 5,
  moreTracksOnLoading: false,
  artist: 'lmfao',
  track: 'sexy',
  lyrics: 'bla bla bla',
  lyricsIsLoading: false,
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
  const updateArtistAndTrack = (artist, track) => {
    console.log('inside artisr track dipatch');
    dispatch({
      type: 'ARTIST_TRACK',
      artist,
      track,
    });
  };
  const updateLyrics = (lyrics) => {
    dispatch({
      type: 'UPDATE_LYRICS',
      lyrics,
    });
  };
  const lyricsLoading = (bool) => {
    dispatch({
      type: 'LYRICS_LOADING',
      lyricsIsLoading: bool,
    });
  };

  return (
    <Context.Provider
      value={{
        state,
        updateState,
        increaseTracks,
        fMoreTracksOnLoading,
        updateArtistAndTrack,
        updateLyrics,
        lyricsLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
