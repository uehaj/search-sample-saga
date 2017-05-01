// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers';
import rootSaga from './sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const result = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return result;
};
