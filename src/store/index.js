import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './data/reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(reducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware));
}