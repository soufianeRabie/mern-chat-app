import axios from "axios";
import {backendUrl} from "../utils/backendUrl.js";


console.log( import.meta.env.BACKEND_URL)
export const axiosConfig = axios.create({
  baseURL :backendUrl,
  withCredentials : true,
})

