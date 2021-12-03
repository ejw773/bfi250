import axios from "axios";
import { API_URL } from '../api/apiUrl';
import authHeader from './auth-header';

const register = (name, email, password) => {
  localStorage.removeItem("user");
  // localStorage.removeItem("persistantState")
  return axios.post(API_URL + "users", {
    name,
    email,
    password
  })
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data
  })
};

const login = (email, password) => {
  localStorage.removeItem("user");
  // localStorage.removeItem("persistantState")
  return axios
    .post(API_URL + "users/login", {
      email,
      password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  return axios
    .post(API_URL + "users/logout", null, { headers: authHeader() })
    .then((response) => {
      console.log(response.data)
      localStorage.removeItem("user");
      // localStorage.removeItem("persistantState")
    })
};

const logoutAll = () => {
  console.log('logging out all devices')
  return axios
    .post(API_URL + "users/logoutAll", null, { headers: authHeader() })
    .then((response) => {
      console.log(response.data)
      localStorage.removeItem("user");
      // localStorage.removeItem("persistantState")
    })
}

const authService = {
  register,
  login,
  logout,
  logoutAll
}

export default authService