import axios from "axios";

export const axiosConfig = axios.create({
  baseURL : 'http://localhost:8080',
  withCredentials : true,
})

