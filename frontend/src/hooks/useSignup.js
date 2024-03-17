import {axiosConfig} from "../axios/index.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
import {useAuthContext} from "../context/AuthContext.jsx";


const useSignup = () => {

  const { setAuthUser } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false);
  const signup = async ({fullName , username , password , confirmPassword , gender})=>
  {

    const success = handleInputErrors ({fullName , username , password , confirmPassword , gender})

    if(!success) return ;
    setIsLoading(true)
    try
    {
     const res =  await axiosConfig.post("/api/auth/signup",{fullName , username , password , confirmPassword , gender})

      const data = await res?.data;
     if(data?.error)
     {
       throw new Error(data.error || "something went wrong");
     }

     // put user data in local storage
     localStorage.setItem("authUser" , JSON.stringify(data))
      // set auth user
      setAuthUser(data)
    }catch (error)
    {
     if(error?.response?.status === 400)
     {
        toast.error(error?.response?.data?.error , {position : "top-center" , duration:2000})
     }else
     {
       toast.error("something went wrong", {position : "top-center" ,} )
     }
    }finally {
      setIsLoading(false);
    }

    }

    return {signup , isLoading }
  }

 export default useSignup;

const handleInputErrors = ({fullName, username, password , confirmPassword , gender}) =>
{
  if(!fullName || !username || !password || !gender || !confirmPassword)
  {
    toast.error("please fill in all fields" ,{position:"top-center"})
    return false ;
  }
  if(password.length <6)
  {
    toast.error("password must be at least 6 characters" ,{position:"top-center"})
    return false ;
  }
  if(password !== confirmPassword)
  {
    toast.error("Password do not match" , {position:"top-center"})
    return false ;
  }
  return true ;
}
