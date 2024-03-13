import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import {useState} from "react";
import NoChatSelected from "./NoChatSelected.jsx";

const MessageContainer = () => {

    const [isChatSelected, setNoChatSelected] = useState(false )
    return (
        <div className={"md:min-w-[450px] flex flex-col"}>
            {isChatSelected ?     <>
                {/* HEADER */}
                <div className={"bg-slate-500 px-4 py-2 mb-2"}>
                    <span className={"label-text "}>To: </span>{" "}
                    <span className={"text-gray-900 font-bold"}> Soufiane rabya </span>
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
