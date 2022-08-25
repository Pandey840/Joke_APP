import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import jokeReducer from "./reducer";
import mySaga from "./saga";



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  jokeReducer,
   applyMiddleware(sagaMiddleware)
 );

sagaMiddleware.run(mySaga);

export default store;