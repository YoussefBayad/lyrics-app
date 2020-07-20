import React from 'react';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, tracks: action.payload };
    case 'ADD_MORE':
      return {
        ...state,
        tracksNumber: state.tracksNumber + 5,
      };
    case 'MORE_LOADING':
      return {
        ...state,
        moreTracksOnLoading: action.moreTracksOnLoading,
      };
    case 'ARTIST_TRACK':
      return { ...state, artist: action.artist, track: action.track };
    case 'UPDATE_LYRICS':
      return { ...state, lyrics: action.lyrics };
    case 'LYRICS_LOADING':
      return { ...state, lyricsIsLoading: action.lyricsIsLoading };
    default:
      return state;
  }
};

export default appReducer;
