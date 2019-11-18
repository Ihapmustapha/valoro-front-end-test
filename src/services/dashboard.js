import Axios from "axios";

const API_URL = `https://reqres.in/api/unknown`;

const fetchDashboardService = () => Axios.get(API_URL);

export default fetchDashboardService;
