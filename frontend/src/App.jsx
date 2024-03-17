import React from 'react';
import Home from "./pages/home/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import {Toaster} from "sonner";
import {useAuthContext} from "./context/AuthContext.jsx";

function App() {

    const {authUser} = useAuthContext();
    return (
        <div className={'p-4 h-screen flex items-center justify-center'}>
         <Routes>
             <Route path={"/"} element={authUser ? <Home/> : <Navigate to={'/login'}/> }/>
             <Route path={"/login"} element={authUser ? <Navigate to={'/'}/> :  <Login/>}/>
             <Route path={"/signup"} element={authUser ? <Navigate to={'/'}/> :<SignUp/>}/>
         </Routes>
            <Toaster richColors/>
        </div>
    );
}

export default App;
