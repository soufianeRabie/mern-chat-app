import {IoSearchSharp} from "react-icons/io5";
import {useState} from "react";
import {toast} from "sonner";
import useConversation from "../../zustand/useConversation.js";
import {useConversations} from "../../hooks/useConversations.js";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const  {setSelectedConversation}= useConversation();
    const {conversations , isLoading} = useConversations();

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        if(!search) return ;
        if(search.length < 3 )
        {
            return toast.error("Search term must be at least 3 characters long ");
        }

        const conversation = conversations.find((c)=>c?.username?.toLowerCase().includes(search.toLowerCase()));

        if(conversation)
        {
            setSelectedConversation(conversation);
            setSearch("");
        }else
        {
            toast.error("No such user found!");
        }
    }
    return (
        <form className={"flex gap-2 items-center"} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={"Search..."}
                className={"input input-bordered rounded-full"}
                onChange={(e)=>setSearch(e.target?.value)}
                value={search}
            />
           <button
               type={'submit'}
               className={"btn btn-circle bg-sky-500 text-white"}
           >
               <IoSearchSharp className={'w-6 h-6 outline-none'}/>
           </button>
        </form>
    )
};

export default SearchInput;


