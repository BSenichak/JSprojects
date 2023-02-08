import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import productsReducer from "./products/productsReducer";
import ProductReducer from "./product/productReducer";
import categoriesReducer from "./categories/categoriesReducer";


export const generalReducer = combineReducers({
    products: productsReducer,
    product: ProductReducer,
    categories: categoriesReducer
})

export const store = createStore(generalReducer, applyMiddleware(thunk, logger))