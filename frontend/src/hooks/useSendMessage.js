import {useState} from "react";
import useConversation from "../zustand/useConversation.js";
import {axiosConfig} from "../axios/index.js";
import conversation from "../components/sidebar/Conversation.jsx";
import {toast} from "sonner";

const useSendMessage = () => {

   const [isLoading, setIsLoading] = useState(false);
   const {selectedConversation , messages , setMessages} = useConversation();
   const sendMessage = async (message) => {
     setIsLoading(true);

     try
     {
       const res = await axiosConfig.post(`/api/messages/send/${selectedConversation?._id}` , {message})
       const data = await res.data ;

       if(data.error)
       {
         throw new Error(data.error)
       }

       console.log("data" ,data)

       setMessages( [...messages , data?.message])
     }catch (error)
     {
        toast.error(error?.message);
     }finally
     {
        setIsLoading(false);
     }
   }
   return {isLoading , sendMessage };
};

export default useSendMessage;


