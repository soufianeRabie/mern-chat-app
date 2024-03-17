import useSendMessage from "./useSendMessage.js";
import {useEffect, useState} from "react";
import useConversation from "../zustand/useConversation.js";
import {toast} from "sonner";
import {axiosConfig} from "../axios/index.js";

export const useGetMessages = () => {

  const [isLoading, setIsLoading] = useState(false);
  const {selectedConversation ,messages, setMessages } = useConversation();

  useEffect(() => {

    const getMessages = async()=>
    {
      setIsLoading(true);

      try
      {
        const res = await axiosConfig.get(`api/messages/${selectedConversation?._id}`);
        const data = await res.data ;

        if(data?.error) throw new Error(data.error);
        setMessages(data);

      }catch (error)
      {

        toast.error(error.message);
      }finally
      {
        setIsLoading(false);
      }
    }

    if(selectedConversation?._id) getMessages();
  }, [selectedConversation?._id , setMessages]);

  return {messages , isLoading}
}
