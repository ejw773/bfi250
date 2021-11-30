import axios from "axios";

const API_URL = "https://bfi250-node.herokuapp.com/";

export const register = (userInfo) => {
  return axios.post(API_URL + "users", userInfo);
};

export const login = (userInfo) => {
  return axios
    .post(API_URL + "users/login", userInfo)
    .then((response) => {
      console.log(response.data)
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const logoutAll = () => {
    console.log('logging out all')
}

export const getFilms = () => {
    return axios
        .get(API_URL + 'films')
}
