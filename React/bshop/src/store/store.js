import {applyMiddleware, createStore } from "redux"
import { generalReducer } from "./generalReducer"
import logger from "redux-logger"
import thunk from "redux-thunk"

 const store  = createStore(generalReducer, applyMiddleware(logger, thunk))
export default store