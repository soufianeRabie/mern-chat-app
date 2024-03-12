import mongoose from "mongoose";

 const connectToMongoDB = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("database connected successfully")
  }catch (error)
  {
    console.log("not connected")
    console.log(error)
  }
}

export default connectToMongoDB;
