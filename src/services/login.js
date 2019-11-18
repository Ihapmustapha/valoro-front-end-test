import Axios from "axios";

const API_URL = `https://reqres.in/api/login`;

const loginService = (email, password) =>
  Axios.post(API_URL, { email, password });

export default loginService;
