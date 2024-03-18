import {Link} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin.js";
import {useState} from "react";

const Login = () => {

    const {login , isLoading} = useLogin();
    const [inputs, setInputs] = useState({
        username : "",
        password : "",
    });

    const handleChangeInputs = (e)=>
    {
        setInputs(prevState => ({...prevState , [e.target.name] : e.target.value}));
    }

    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        await login(inputs);
    }
    return (
        <div className={"flex flex-col items-center justify-center min-w-96 mx-auto"}>
           <div className={"w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"}>
                <h1 className={'text-3xl text-gray-300 font-semibold text-center '}>
                    Login
                    <span className={'text-blue-500 text-3xl'} > Chat App </span>
                </h1>

               <form onSubmit={handleSubmit}>
                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Username</span>
                       </label>
                       <input
                           type="text"
                           placeholder={"Enter Username "}
                           className={'w-full input input-bordered h-10'}
                           name={"username"}
                           onChange={handleChangeInputs}
                       />

                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Password</span>
                       </label>
                       <input
                           type="password"
                           placeholder={"Enter Password "}
                           className={'w-full input input-bordered h-10'}
                           name={'password'}
                           onChange={handleChangeInputs}
                       />
                   </div>
                   <Link to="/signup" className={"text-sm hover:underline hover:text-gray-100 mt-2 inline-block"}>
                       {"Don't"} have an account?
                   </Link>
                   <div>
                       <button disabled={isLoading} className={"btn btn-block btn-sm mt-2 border border-slate-700"}>
                           {!isLoading ? "Login" : <span className={"loading loading-spinner"}></span>}
                       </button>
                   </div>
               </form>
           </div>
        </div>
    )
 };

 export default Login;



