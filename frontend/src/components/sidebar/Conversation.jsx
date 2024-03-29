import useConversation from "../../zustand/useConversation.js";
import {useSocketContext} from "../../context/SocketContext.jsx";

const Conversation = ({conversation , lastIndex , emoji }) => {

     const {selectedConversation , setSelectedConversation}=useConversation();
     const {onlineUsers} = useSocketContext();

     const isOnline = onlineUsers.includes(conversation?._id);

    const isSelectedConversation = selectedConversation?._id === conversation?._id;

    return (
        <>
            <div
                className={` ${isSelectedConversation && "bg-sky-500"} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
                onClick={()=>setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className={"w-12 rounded-full"}>
                        <img
                            src={conversation?.profilePic} alt="user avatar "
                        />
                    </div>
                </div>

            <div className={'flex flex-col flex-1 '}>
                <div className={"flex gap-3 justify-between"}>
                    <p className={'font-bold text-gray-200'}> {conversation?.username}</p>
                    <span className={"text-xl"}>{emoji}</span>
                </div>
            </div>
            </div>

            {!lastIndex &&  <div className={"divider my-0 py-0 h-1 "}/>}
        </>
    );
};

export default Conversation;

