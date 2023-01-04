import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4001/api/v2"
});

instance.defaults.withCredentials = false;

export default instance;