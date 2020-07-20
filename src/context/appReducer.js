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
    default:
      return state;
  }
};

export default appReducer;
