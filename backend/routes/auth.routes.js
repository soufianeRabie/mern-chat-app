import {login, logout, signup} from "../controllers/auth.controller.js";
import express from "express";


const router = express.Router()

router.post('/login' , login);
router.post('/signup', signup);
router.post('/logout', logout);
export default router
