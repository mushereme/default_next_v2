import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4001/api/v2"
});

instance.defaults.headers = {
  "Access-Control-Allow-Origin": "*"
}
instance.defaults.withCredentials = false;
instance.interceptors.response.use(
  (response) => response,
  (error) => 
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong."
    )
);

export default instance;