import {createContext, useContext, useEffect, useState} from "react";
import {useAuthContext} from "./AuthContext.jsx";
import {io} from "socket.io-client";
import {backendUrl} from "../utils/backendUrl.js";

export const SocketContext = createContext();

export const SocketContextProvider = ({children})=>
{

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {

        if(authUser)
        {
            const socket = io(backendUrl,{
                query :{
                    userId :authUser?._id,
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            })

            return ()=>socket.close();
        }else
        {
            if(socket)
            {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
    <SocketContext.Provider value={{socket , onlineUsers}}>
        {children}
    </SocketContext.Provider>
    )
}


export const useSocketContext = ()=>
{
  return  useContext(SocketContext);
}
