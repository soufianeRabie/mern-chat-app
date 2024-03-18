import useConversation from "../../zustand/useConversation.js";
import {useAuthContext} from "../../context/AuthContext.jsx";
import {extractTime} from "../../utils/extractTime.js";
import {useEffect} from "react";

const Message = ({message}) => {

    const {selectedConversation} = useConversation();
    const {authUser} = useAuthContext();

    const fromMe = message?.senderId === authUser?._id;
    const classNameChat = fromMe ?'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const formatedTime = extractTime(message?.createdAt);
    const shakeClass = message?.shouldShake ? "shake" : "";
    const isThisConversation = message?.senderId === selectedConversation?._id || message?.senderId === authUser?._id

    return (
       <>
           {isThisConversation &&
               <div className={`chat ${classNameChat} `}>
                   <div className={"chat-image avatar"}>
                       <div className={" w-10 rounded-full"}>
                           <img
                               src={profilePic}
                               alt="user image"
                           />
                       </div>
                   </div>
                   <div className={`chat-bubble text-white   ${bubbleBgColor} ${shakeClass}  `}>{message?.message}</div>
                   <div
                       className={`chat-footer opacity-50 text-xs flex gap-1 items-center pb-1  `}>{formatedTime} </div>

               </div>}
       </>
    );
};

export default Message


