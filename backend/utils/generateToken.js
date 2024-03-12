import jwt from 'jsonwebtoken'



const generateTokenAndSetCookie = (userId , res)=>
{

  const token = jwt.sign({userId} ,process.env.JWT_SECRET ,{
    expiresIn : '15d'
  })
  res.cookie('jwt' , token , {
    maxAge : 129600000,
    httpOnly : true , // prevent XSS attacks cross-site scripting attacks,
    sameSite : 'strict',
    secure : process.env.NODE_ENV !== 'development'
  })
}

export default generateTokenAndSetCookie ;
