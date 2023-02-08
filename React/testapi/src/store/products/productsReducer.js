import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_STARTED,
  } from './productsActions';
  
  const initialState = {
    loading: false,
    todos: [],
    error: null
  };
  
  export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT_STARTED:
        return {
          ...state,
          loading: true
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null, 
          todos:  action.payload
        };
      case ADD_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }