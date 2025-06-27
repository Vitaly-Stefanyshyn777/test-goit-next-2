import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const login = async (credential) => {
  const { data } = await axios.post("/users/login", credential);
  return data;
};

export const register = async (credential) => {
  const { data } = await axios.post("/users/signup", credential);
  return data;
};
