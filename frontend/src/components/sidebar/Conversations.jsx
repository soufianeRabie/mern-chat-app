import Conversation from "./Conversation.jsx";
import {useEffect, useState} from "react";
import {axiosConfig} from "../../axios/index.js";
import {toast} from "sonner";
import {useConversations} from "../../hooks/useConversations.js";
import {RandomEmoji} from "../../utils/RandomEmoji.js";

const Conversations = () => {

  const {conversations , isLoading}= useConversations();


    return (
        <div className={"py-2 flex flex-col overflow-auto" }>
            {conversations.map((conversation , idx) =>(
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={RandomEmoji()}
                        lastIndex={idx ===  conversations.length - 1 }
                    />
            ))}

            {isLoading? <span className={"loading loading-spinner mx-auto" }></span> : null}
        </div>
    )
};

 export default Conversations;


 //STARTER CODE

//
// import Conversation from "./Conversation.jsx";
//
// const Conversations = () => {
//     return (
//         <div className={"py-2 flex flex-col overflow-auto"}>
//             <Conversation/>
//             <Conversation/>
//             <Conversation/>
//             <Conversation/>
//             <Conversation/>
//             <Conversation/>
//         </div>
//     )
// };
//
// export default Conversations;
