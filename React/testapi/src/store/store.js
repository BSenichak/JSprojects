import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import productsReducer from "./products/productsReducer";
import ProductReducer from "./product/productReducer";
import categoriesReducer from "./categories/categoriesReducer";
import cartReducer from "./cart/cartReducer";


export const generalReducer = combineReducers({
    products: productsReducer,
    product: ProductReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

export const store = createStore(generalReducer, applyMiddleware(thunk, logger))