import {BiLogOut} from "react-icons/bi";
import {useLogout} from "../../hooks/useLogout.js";

const LogoutButton = () => {

    const {logout , isLoading } = useLogout();
    return (
        <div className={"mt-auto"}>
            <BiLogOut onClick={logout} className={"w-6 h-6 text-white cursor-pointer"}/>
        </div>
    )
};

export default LogoutButton;
