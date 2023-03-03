// IMPORTATION

import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGOUT_USER,
    SUCC_USER,
  } from "../ActionType/user";
  
  // INITIAL STATE
  const initialState = {
    user: null,
    loadUser: false,
    erros: [],
    isAuth: false,
  };
  // PURE FUNCTION
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_USER:
        return { ...state, loadUser: true };
      case SUCC_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, loadUser: false, user: payload.user, isAuth: true };
      case FAIL_USER:
        return { ...state, loadUser: false, erros: payload };
      case CURRENT_USER:
        return { ...state, user: payload, loadUser: false, isAuth: true };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          user: null,
          loadUser: false,
          erros: [],
          isAuth: false,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;