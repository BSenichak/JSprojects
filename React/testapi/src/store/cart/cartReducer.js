import { ADD_PRODUCT_TO_CART, CLEAR_CART, LOAD_CART_PRODUCT_FAULUED, LOAD_CART_PRODUCT_START, LOAD_CART_PRODUCT_SUCCESS, REMOVE_CART_ITEM, SET_CART_ITEMS, TOGGLE_CART_STATE } from "./cartActions";

const initalState = {
    cartState: false,
    cartItems: [],
    loading: false,
    error: null,
    items: []
}

export default function cartReducer (state=initalState, action){
    switch(action.type){
        case TOGGLE_CART_STATE:
            return {
                ...state,
                cartState: !state.cartState
            }
        case CLEAR_CART:
            return {
                ...state,
                items: []
            }
        case ADD_PRODUCT_TO_CART:
            window.localStorage.setItem("cart", JSON.stringify([...state.cartItems, action.payload]))
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case REMOVE_CART_ITEM:
            window.localStorage.setItem("cart", JSON.stringify([...state.cartItems.filter(el=>el !== action.payload)]))
            return {
                ...state,
                cartItems: [...state.cartItems.filter(el=>el !== action.payload)],
                items: []
            }
        case LOAD_CART_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
            }
        case LOAD_CART_PRODUCT_FAULUED:
            return {
                ...state,
                error: action.payload
            }
        case LOAD_CART_PRODUCT_SUCCESS:
            return {
                ...state,
                items: [...state.items ,action.payload],
                loading: false
            }
        default:
            return state;
    }
}