import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

//initial state
const initialState = {};

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
