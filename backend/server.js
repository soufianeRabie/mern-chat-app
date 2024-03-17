import express from 'express'
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js";
import {app , server} from "./socket/socket.js";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

dotenv.config();

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:5000', // Change this to your frontend URL
  credentials: true
}));

// Routes
app.use('/api/auth' , authRoutes)
app.use('/api/messages' , messageRoutes)
app.use('/api/users' , userRoutes)

app.use(express.static(path.join(__dirname, 'frontend/dist')))

app.get('*' , (req , res) => {
  res.sendFile(path.join(__dirname, 'frontend' , 'dist' , 'index.html'));
});

server.listen(PORT , ()=>{
  connectToMongoDB();
  console.log(`listening on ${PORT}`)
})
