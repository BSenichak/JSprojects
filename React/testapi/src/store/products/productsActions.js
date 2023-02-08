import axios from "axios";

export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
export const ADD_PRODUCT_STARTED = "ADD_PRODUCT_STARTED";

export const addProduct = () => {
  return (dispatch) => {
    dispatch(addProductStarted());
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch(addProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addProductFailure(err.message));
      });
  };
};

const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

const addProductStarted = () => ({
  type: ADD_PRODUCT_STARTED,
});

const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: {
    error,
  },
});
