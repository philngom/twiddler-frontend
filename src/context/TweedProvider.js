import { createContext, useContext, useReducer } from 'react';
import { addItem } from '../services/tweeds';

const initialState = [];

const reducer = async (state, action) => {
  switch (action.type) {
    case 'ADD':
      const tweed = await addItem(action.payload.tweed);
      console.log(tweed);
      return [];
  }
};

const TweedContext = createContext();

export const TweedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTweed = (tweed) => {
    dispatch({ type: 'ADD', payload: { tweed } });
  };

  return (
    <TweedContext.Provider value={{ state, addTweed }}>
      {children}
    </TweedContext.Provider>
  );
};

export const useTweed = () => {
  const context = useContext(TweedContext);

  if (!context) {
    throw new Error('useTweed must be used from with a TweedProvider');
  }

  return context;
};
