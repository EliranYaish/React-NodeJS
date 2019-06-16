import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from "./saga";

const  configureStore = (preloadedState)=> {

  const sagaMiddleware = createSagaMiddleware();

  let middleware = [
    sagaMiddleware,
  ];
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga, sagaMiddleware);
  return store;
};

export default configureStore;