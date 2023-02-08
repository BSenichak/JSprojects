import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_STARTED,
    SET_SORT,
    CLEAR_LIST,
  } from './productsActions';
  
  const initialState = {
    loading: false,
    todos: [],
    error: null,
    sortType: "desc"
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
      case SET_SORT:
        return {
          ...state,
          sortType: action.payload,
          todos: []
        };
      case CLEAR_LIST:
        return {
          ...state,
          todos: []
        };
      default:
        return state;
    }
  }