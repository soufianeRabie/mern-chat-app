import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import {useEffect, useState} from "react";
import NoChatSelected from "./NoChatSelected.jsx";
import useConversation from "../../zustand/useConversation.js";
import conversation from "../sidebar/Conversation.jsx";
const MessageContainer = () => {

 const {selectedConversation , setSelectedConversation} = useConversation();

    useEffect(() => {

        // clean up function
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className={"md:min-w-[450px] flex flex-col"}>
            {selectedConversation ?     <>
                {/* HEADER */}
                <div className={"bg-slate-500 px-4 py-2 mb-2"}>
                    <span className={"label-text "}>To: </span>{" "}
                    <span className={"text-gray-900 font-bold"}>{selectedConversation?.username} </span>
                </div>

                <Messages />
                {/* MESSAGE INPUT */}
                <MessageInput/>
            </> : <NoChatSelected />}

        </div>
    )
};

export default MessageContainer;


// START CODE SNIPPET


// import Messages from "./Messages.jsx";
// import MessageInput from "./MessageInput.jsx";
//
// const MessageContainer = () => {
//     return (
//         <div className={"md:min-w-[450px] flex flex-col"}>
//             <>
//                 {/* HEADER */}
//                 <div className={"bg-slate-500 px-4 py-2 mb-2"}>
//                     <span className={"label-text "}>To: </span>{" "}
//                     <span className={"text-gray-900 font-bold"}> Soufiane rabya </span>
//                 </div>
//
//                 <Messages />
//                 {/* MESSAGE INPUT */}
//                 <MessageInput/>
//             </>
//
//         </div>
//     )
// };
//
// export default MessageContainer;
