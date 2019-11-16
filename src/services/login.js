import Axios from "axios";

const API_URL = `https://reqres.in/api/login`;

const loginService = async (email, password) =>
  await Axios.post(API_URL, { email, password });

export default loginService;
