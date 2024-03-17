import {useEffect, useState} from "react";
import {axiosConfig} from "../axios/index.js";
import {toast} from "sonner";

export const useConversations = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect( () => {
    const fetchConversations = async()=>
    {
      setIsLoading(true);
      try{
        const res  = await axiosConfig.get('http://localhost:8080/api/users');
        const data = await res.data;

        if(data.error)
        {
          throw new Error(data.error);
        }

        setConversations(data);
      }catch (error)
      {
        toast.error(error?.message || "something went wrong")
      }finally
      {
        setIsLoading(false);
      }
    }

    fetchConversations()
  }, []);

  return {isLoading , conversations};
};
