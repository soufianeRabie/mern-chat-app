import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
  fullName:{
    type : String,
    required: true
  },
  username :{
    type : String,
    required: true,
    unique : true
  } ,
  password: {
    type : String,
    minlength : 6 ,
    required: true
  },
  gender : {
    type : String,
    enum : ["male", "female"],
    required : true
  },
  profilePic :
    {
      type : String,
      default : "",
    }
    // timestamps for createdAt and updatedAt
},{timestamps : true });

// User Model
const User = mongoose.model('User',userSchema);
export default User ;
