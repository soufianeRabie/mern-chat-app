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

    useEffect(() => {
        console.log("message" ,message)
    }, []);
    return (
        <div className={`chat ${classNameChat} `}>
             <div className={"chat-image avatar"}>
                 <div className={" w-10 rounded-full"}>
                     <img
                         src={profilePic}
                     alt="user image"
                     />
                 </div>
            </div>
            <div className={`chat-bubble text-white   ${bubbleBgColor } ${shakeClass}  `}>{message?.message}</div>
            <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center pb-1  `}>{formatedTime} </div>

        </div>
    );
};

export default Message



 // START CODE SNIPPET
 //
 // const Message = () => {
 //     return (
 //         <div className={"chat chat-end"}>
 //             <div className={"chat-image avatar"}>
 //                 <div className={" w-10 rounded-full"}>
 //                     <img
 //                         src={
 //                             "https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png"
 //                         }
 //                         alt="user image"
 //                     />
 //                 </div>
 //             </div>
 //             <div className={`chat-bubble text-white bg-blue-500 `}>Hi What's upp?</div>
 //             <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center  `}>12:42 </div>
 //         </div>
 //     );
 // };
 //
 // export default Message;

