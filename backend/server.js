import express from 'express'
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js";


const app = express()
dotenv.config();
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth' , authRoutes)
app.use('/api/messages' , messageRoutes)
app.use('/api/users' , userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
  console.log(process.env.PORT)
  connectToMongoDB()
  console.log(`listening on ${PORT}`)
})
