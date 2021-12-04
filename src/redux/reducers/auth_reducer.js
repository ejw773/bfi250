import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_ALL,
    LOGOUT,
    CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_FILM_SET
  } from "../actionTypes";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function auth(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: {
            name: payload.name,
            email: payload.email,
            filmSet: payload.filmSet,
            token: payload.token  
          }
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT_ALL:
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };
      case CHANGE_EMAIL:
        console.log('changing email')
        return state
      case CHANGE_NAME:
        console.log('changing user name')
        return state
      case CHANGE_FILM_SET:
        return {
        ...state,
        user: {
          filmSet: action.payload.newSet
        }
        };

      default:
        return state;
    }
  }