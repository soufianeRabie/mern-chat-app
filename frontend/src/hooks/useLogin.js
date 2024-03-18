import {useState} from "react";
import {useAuthContext} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {axiosConfig} from "../axios/index.js";
import {toast} from "sonner";

export const useLogin = ()=>
{
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser} = useAuthContext();
  // const navigate = useNavigate();

  const login = async ({username , password})=>
  {

    const success = handleInputErrors({username , password});
    if(!success) return ;
    setIsLoading(true);
    try
    {
      const res = await axiosConfig.post('/api/auth/login' , {username , password})
      const data = await  res?.data;

      if(data?.error)
      {
        throw new Error("something went wrong")
      }

      localStorage.setItem("authUser", JSON.stringify(data))
      setAuthUser(data);
    }catch (error)
    {
      localStorage.removeItem("authUser")
      if(error?.response?.status === 400)
      {
        toast.error(error.response.data.error)
      }else
      {
        toast.error("something went wrong");
      }
    }finally
    {
      setIsLoading(false);
    }
  }

  return {login ,isLoading }
}


const handleInputErrors = ({ username, password ,}) =>
{
  if(!username || !password )
  {
    toast.error("please fill in all fields" ,{position:"top-center"})
    return false ;
  }
  if(password.length <6)
  {
    toast.error("password must be at least 6 characters" ,{position:"top-center"})
    return false ;
  }
  return true ;
}
