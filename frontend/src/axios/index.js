import axios from "axios";
import {backendUrl} from "../utils/backendUrl.js";

export const axiosConfig = axios.create({
  baseURL :backendUrl,
  withCredentials : true,
})

