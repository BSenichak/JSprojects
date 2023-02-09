import axios from "axios";

export const TOGGLE_CART_STATE = "TOGGLE_CART_STATE";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const SET_CART_ITEMS = "SET_CART_ITEMS";

export const LOAD_CART_PRODUCT = "LOAD_CART_PRODUCT";
export const LOAD_CART_PRODUCT_START = "LOAD_CART_PRODUCT";
export const LOAD_CART_PRODUCT_SUCCESS = "LOAD_CART_PRSUCCESS";
export const LOAD_CART_PRODUCT_FAULUED = "LOAD_CART_PRFAULUED";

export const toggleCartState = () => {
  return {
    type: TOGGLE_CART_STATE,
  };
};

export const addProductToCart = (id) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: id,
  };
};

export const setCartItems = (arr) => {
  return {
    type: SET_CART_ITEMS,
    payload: arr,
  };
};

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const loadCartProduct = (id) => {
  return (dispatch) => {
    dispatch(loadCartProductStart());
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => dispatch(loadCartProductSuccess(res.data)))
      .catch((err) => dispatch(loadCartProductFauled(err)));
  };
};

export const loadCartProductStart = () => {
  return {
    type: LOAD_CART_PRODUCT_START,
  };
};

export const loadCartProductFauled = (err) => {
  return {
    type: LOAD_CART_PRODUCT_FAULUED,
    payload: err,
  };
};

export const loadCartProductSuccess = (data) => {
  return {
    type: LOAD_CART_PRODUCT_SUCCESS,
    payload: data,
  };
};
