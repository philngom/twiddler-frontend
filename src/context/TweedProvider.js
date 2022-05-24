import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { addItem, fetchAllTweeds } from '../services/tweeds';

const reducer = async (state, action) => {
  switch (action.type) {
    case 'ADD':
      const tweed = await addItem(action.payload.tweed);
      console.log(tweed);
      return [...state, tweed];
    case 'GET':
      const tweeds = await fetchAllTweeds();
      console.log(tweed);
      return [tweeds];
    default:
      throw Error('Error in reducer');
  }
};

const initialState = [];

const TweedContext = createContext();

export const TweedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTweed = (tweed) => {
    dispatch({ type: 'ADD', payload: { tweed } });
  };

  const getTweeds = () => {
    console.log('in here');
    dispatch({ type: 'GET' });
  };

  return (
    <TweedContext.Provider value={{ state, addTweed, getTweeds }}>
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
