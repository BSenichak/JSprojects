import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import productsReducer from "./products/productsReducer";
import ProductReducer from "./product/productReducer";
import categoriesReducer from "./categories/categoriesReducer";
import cartReducer from "./cart/cartReducer";
import userWindowReducer from "./userWindow/userWindowReducer";
import authReducer from "./auth/authReducer";


export const generalReducer = combineReducers({
    products: productsReducer,
    product: ProductReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    userWindow: userWindowReducer,
    auth: authReducer
})

export const store = createStore(generalReducer, applyMiddleware(thunk, logger))