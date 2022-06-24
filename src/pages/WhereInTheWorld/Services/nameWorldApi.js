import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/name/",
  method: "get",
  timeout: 20000,
});
export default axiosApi;
