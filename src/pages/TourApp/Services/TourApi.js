import axios from "axios";

const axiosApi = axios.create({
  baseURL: " https://62a00597a9866630f80561eb.mockapi.io/v1/",
  method: "get",
  timeout: 20000,
});
export default axiosApi;
