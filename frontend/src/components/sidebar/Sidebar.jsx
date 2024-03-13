import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
    return (
        <div className={"border border-slate-500 flex flex-col p-4"}>
            <SearchInput />
            <div className={"divider px-3 "}></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar ;
