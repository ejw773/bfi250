import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    LOGOUT_ALL,
    DELETE_ACCOUNT    
} from "../actionTypes";

import AuthService from "../../services/auth-service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: response}
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { 
          name: data.name,
          email: data.email,
          filmSet: data.filmSet,
          token: data.token
        },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logout().then(
    (data) => {
      dispatch({
        type: LOGOUT,
        payload: data
      });
      return Promise.resolve();
    }
  )
};

export const logoutAll = () => (dispatch) => {
  AuthService.logoutAll();
  dispatch({
    type: LOGOUT_ALL,
  })
}

export const deleteAccount = () => (dispatch) => {
  return AuthService.deleteAccount().then(
    (data) => {
      dispatch({
        type: DELETE_ACCOUNT,
        payload: data
      });
      return Promise.resolve();
    }
  )
}