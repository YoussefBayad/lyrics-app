import React from 'react';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
