import {BsSend} from "react-icons/bs";
import {useState} from "react";
import useSendMessage from "../../hooks/useSendMessage.js";

const MessageInput = () => {

    const [message, setMessage] = useState('');
    const {isLoading , sendMessage} = useSendMessage();

    const handleSendMessage = async (e)=>
    {
        e.preventDefault();
        if(!message) return ;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className={'px-4 my-3'} onSubmit={handleSendMessage}>
            <div className={"w-full relative"}>
                <input
                    onChange={(e)=>setMessage(e.target.value)}
                    type="text"
                    className={'border text-sm rounded-lg  w-full p-2.5 bg-gray-700 border-gray-600 text-white'}
                    placeholder={"send a message"}
                    value={message}
                />
                {message?.length > 0 &&
                    <button type={'submit'} className={"absolute inset-y-0 end-0 flex items-center pe-3"}>
                        {isLoading ? <span className={"loading loading-spinner"}></span> :   <BsSend/>}
                    </button>}
            </div>
        </form>
    )
};

export default MessageInput;
