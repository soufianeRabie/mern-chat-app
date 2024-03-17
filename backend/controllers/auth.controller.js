import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
try
{
  const {username , password} = req.body ;
  const user = await User.findOne({username});
  const isCorrectPassword = await bcrypt.compare(password , user?.password || "");

  if(!user || !isCorrectPassword) {
    return res.status(400).json({error : "Invalid password our username"})
  }

  await generateTokenAndSetCookie(user?._id , res)
  return res.status(200).json({
    _id : user?._id,
    username : user?.username,
    fullName : user?.fullName ,
    profilePic : user?.profilePic
  });

}catch (error)
{
  console.log("Error in login controller" , error?.message)
  res.status(500).json({error : "Internal Server Error "})
}
}

export const signup = async (req, res) => {

 try
 {
   const {fullName , username  ,gender, password , confirmPassword} = req.body

   if(password.length < 6)
   {
     return res.status(400).json({error : "Password must be at least 6 characters"})
   }
   if(password !== confirmPassword)
   {
     return res.status(400).json({error : "Password don't match"})
   }
   const user = await User.findOne({username});

   if(user)
   {
     return res.status(400).json({error : "Username already exists"})
   }

   //HASH PASSWORD HERE
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt)

   const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
   const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

   const newUser = new User({
     fullName,
     username,
     password : hashedPassword,
     gender,
     profilePic : gender === 'male' ? boyProfilePic : girlProfilePic
   })

   await newUser.save()
   if(newUser)
   {
     // Generate jwt token
     await generateTokenAndSetCookie(newUser._id , res)
     res.status(200).json({
       _id  : newUser._id,
       fullName : newUser.fullName,
       username : newUser.username,
       profilePic : newUser.profilePic
     })
   }else {
     res.status(400).json({error : 'invalid user data'})
   }
 }catch (error)
 {
   console.log("Error in signup controller" , error?.message)
   res.status(500).json({error : "Internal Server Error "})
 }

}
export const logout = async (req, res)=>{

  try {
    await  res.cookie("jwt" , "" , {maxAge:0})
    res.json({message : "Logout successfully "})
  }catch(error)
  {
    console.log("Error in signup controller" , error?.message)
    res.status(500).json({error : "Internal Server Error "})
  }
}
