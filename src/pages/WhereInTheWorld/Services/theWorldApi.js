import axios from "axios";

const fetchApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
  method: "get",
  timeout: 20000,
});
export default fetchApi;
