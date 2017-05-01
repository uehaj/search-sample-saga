// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from './reducers';

export const configureStore = () => {
  return createStore(
    combineReducers(reducers, {}),
  );
}
