import axios from "axios";
import { API_URL } from '../api/apiUrl';
import authHeader from './auth-header';

const register = (name, email, password) => {
  localStorage.removeItem("user");
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
    })
};

const logoutAll = () => {
  return axios
    .post(API_URL + "users/logoutAll", null, { headers: authHeader() })
    .then((response) => {
      console.log(response.data)
      localStorage.removeItem("user");
    })
}

const changeFilmSet = (bfiSet) => {
  return axios
    .patch(API_URL + "users/me", {filmSet: bfiSet}, { headers: authHeader() })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
}

const changeName = (newName) => {
  return axios
    .patch(API_URL + "users/me", {name: newName}, { headers: authHeader() })
    .then((response) => {
      console.log(response)
      return response
      // update local storage
    })
}

const changeEmail = (newEmail) => {
  return axios
    .patch(API_URL + "users/me", {email: newEmail}, { headers: authHeader() })
    .then((response) => {
      console.log(response)
      return response
      // update local storage
    })
}

const changePassword = (newPassword) => {
  return axios
    .patch(API_URL + "users/me", {password: newPassword}, { headers: authHeader() })
    .then((response) => {
      console.log(response)
      return response
      // update local storage
    })
}

const deleteAccount = () => {
  return axios
    .delete(API_URL + "users/me", { headers: authHeader() })
    .then((response) => {
      console.log(response)
      localStorage.removeItem("user");
      return response
    })
}


const authService = {
  register,
  login,
  logout,
  logoutAll,
  changeFilmSet,
  changeName,
  changeEmail,
  changePassword,
  deleteAccount
}

export default authService