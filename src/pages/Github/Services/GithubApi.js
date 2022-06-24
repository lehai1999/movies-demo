import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://api.github.com/users/",
  method: "get",
  timeout: 20000,
});
export default axiosApi;
