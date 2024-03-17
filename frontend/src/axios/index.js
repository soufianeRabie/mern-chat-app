import axios from "axios";

export const axiosConfig = axios.create({
  baseURL : 'https://mern-chat-app-b5yo.onrender.com',
  withCredentials : true,
})

