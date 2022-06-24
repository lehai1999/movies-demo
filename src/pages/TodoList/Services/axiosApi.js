import axios from "axios";

const Services = {
  fetchApi: axios.create({
    baseURL: "https://62a00597a9866630f80561eb.mockapi.io/v1/",
    method: "get",
    timeout: 10000,
  }),

  deleteAPI: axios.create({
    baseURL: "https://62a00597a9866630f80561eb.mockapi.io/v1/todos",
    method: "delete",
    timeout: 10000,
  }),
  putAPI: axios.create({
    baseURL: "https://62a00597a9866630f80561eb.mockapi.io/v1/todos",
    method: "put",
    timeout: 10000,
  }),
};

export default Services;
