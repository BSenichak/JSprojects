import axios from "axios";
export const LOGIN = "LOGIN";
export const START_LOGIN = "START_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILUED_LOGIN = "FAILUED_LOGIN";
export const REGISTER = "REGISTER";
export const START_REGISTER = "START_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";
export const FAILUED_REGISTER = "FAILUED_REGISTER";
export const LOAD_TOKEN = "LOAD_TOKEN";
export const UNLOGIN = "UNLOGIN";

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(startLogin());
    axios
      .post("https://fakestoreapi.com/auth/login", { username, password })
      .then((res) => dispatch(successLogin(res.data)))
      .catch((err) => dispatch(failuedLogin(err)));
  };
};

export const startLogin = () => {
  return {
    type: START_LOGIN,
  };
};

export const failuedLogin = (err) => {
  return {
    type: FAILUED_LOGIN,
    payload: err.response.data,
  };
};

export const successLogin = (data) => {
  return {
    type: SUCCESS_LOGIN,
    payload: data,
  };
};

export const register = (username, password, email, name) => {
  return (dispatch) => {
    dispatch(startRegister());
    axios
      .post("https://fakestoreapi.com/users", {
        username,
        password,
        email,
        name: {
          firstname: name.firstname,
          lastname: name.lastname,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      })
      .then((res) => dispatch(successRegister(res.data)))
      .catch((err) => dispatch(failuedRegister(err)));
  };
};

export const startRegister = () => {
  return {
    type: START_REGISTER,
  };
};

export const failuedRegister = (err) => {
  return {
    type: FAILUED_REGISTER,
    payload: err.response.data,
  };
};

export const successRegister = (data) => {
  return {
    type: SUCCESS_REGISTER,
    payload: data,
  };
};

export const loadToken = () =>{
  return {
    type: LOAD_TOKEN,
  }
}

export const unLogin = () =>{
  return {
    type: UNLOGIN,
  }
}