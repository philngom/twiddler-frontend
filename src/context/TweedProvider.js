import { createContext, useContext, useReducer } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
  }
};

const TweedContext = createContext();

export const TweedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTweed = () => {
    dispatch({ type: 'ADD', payload: { tweed } });
  };

  return (
    <TweedContext.Provider value={{ state }}>{children}</TweedContext.Provider>
  );
};

export const useTweed = () => {
  const context = useContext(TweedContext);

  if (!context) {
    throw new Error('useTweed must be used from with a TweedProvider');
  }

  return context;
};
