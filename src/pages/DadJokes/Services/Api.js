import axios from "axios";

const fetchApi = axios.create({
  baseURL: "https://icanhazdadjoke.com/",
  method: "get",
  timeout: 20000,
});
export default fetchApi;
