import {useState} from "react";
import {toast} from "sonner";
import {axiosConfig} from "../axios/index.js";
import {useAuthContext} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

export const useLogout = () =>
{
  const [isLoading, setIsLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const navigate = useNavigate();

  const logout = async ()=>
  {
    setIsLoading(true);
    try
    {
      const res = await axiosConfig.post("/api/auth/logout");
      const data = res.data;
      if(res?.error || data?.error)
      {
        throw new Error(res?.error || data?.error)
      }

      localStorage.removeItem("authUser");
      setAuthUser(null);
      navigate('/login');
    }catch (error)
    {
      toast.error("logout failed try again" , );
    }finally {
      setIsLoading(false);
    }
  }

  return {logout , isLoading}
}
