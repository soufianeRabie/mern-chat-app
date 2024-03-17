import Message from "./Message.jsx";
import {useGetMessages} from "../../hooks/useGetMessages.js";
import {useEffect, useRef, useState} from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {

    const {messages , isLoading} = useGetMessages();
    const lastMessageRef = useRef()

    useListenMessages();

    useEffect(() => {
        setTimeout(()=>
        {
            lastMessageRef?.current?.scrollIntoView({behavior :'smooth'});
        },100);
    }, [messages]);

    return (
        <div className={"p-4 flex-1 overflow-auto"}>

            {!isLoading &&
                messages?.map((message , key)=>(
                    <div  key={key} ref={lastMessageRef}>
                        <Message
                            message={message}
                        />
                    </div>
                ))}
            {!isLoading && messages.length === 0 && (
                <div className={"mx-auto text-center text-white"}> send a message to start a conversation </div>
            )}

            {isLoading &&
                <div className={"loading loading-spinner text-center text-white"}></div>}
        </div>
    )
};

export default Messages;

// START CODE SNIPPET

// import Message from "./Message.jsx";
//
// const Messages = () => {
//     return (
//         <div className={"p-4 flex-1 overflow-auto"}>
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     )
// };
//
// export default Messages;




