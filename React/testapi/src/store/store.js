import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import productsReducer from "./products/productsReducer";
import ProductReducer from "./product/productReducer";


export const generalReducer = combineReducers({
    products: productsReducer,
    product: ProductReducer
})

export const store = createStore(generalReducer, applyMiddleware(thunk, logger))