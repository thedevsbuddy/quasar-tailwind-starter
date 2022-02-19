import axios from "axios";

const request = axios.create({
  baseURL: "http://example/api",
  headers: {
    Accept: "application/json",
  },
});

export default request;
