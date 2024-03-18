import Login from "../login/Login.jsx";
import GenderCheckbox from "./GenderCheckbox.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import useSignup from "../../hooks/useSignup.js";



const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName : '',
        username : '',
        password : '',
        confirmPassword :'',
        gender :'',
    });

    const {signup , isLoading} = useSignup();


    const handleChangeInputs = (name , value)=>
    {
        setInputs(prevState => ({...prevState,[name] : value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault() ;
       await signup(inputs)
    }
    return (
        <div className={' flex flex-col items-center justify-center min-w-96 mx-auto'}>
           <div className={"w-full p-6  rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0"}>
               <h1 className={"text-3xl text-gray-300 font-semibold text-center"}>
                   SignUp
                   <span className={"text-3xl text-blue-500 "}> Chat App</span>
               </h1>

               <form onSubmit={handleSubmit}>
                   <div>
                       <label className={"label p-2"}>
                           <span className={'text-base label-text'}>
                               Full Name
                           </span>
                       </label>
                       <input
                           type="text"
                           placeholder={"Soufiane Rabya"}
                           className={"input input-bordered w-full h-10"}
                           name={'fullName'}
                           onChange={(e)=>handleChangeInputs(e.target.name , e.target.value)}
                       />
                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Username</span>
                       </label>
                       <input
                           type="text"
                           placeholder={"Sofiane Rabya"}
                           className={'w-full input input-bordered h-10'}
                           name={'username'}
                           onChange={(e)=>handleChangeInputs(e.target.name , e.target.value)}
                       />
                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Password</span>
                       </label>
                       <input
                           type="password"
                           placeholder={"Password"}
                           className={'w-full input input-bordered h-10'}
                           name={'password'}
                           onChange={(e)=>handleChangeInputs(e.target.name , e.target.value)}
                       />
                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Confirm Password </span>
                       </label>
                       <input
                           type="password"
                           placeholder={"Confirm Password"}
                           className={'w-full input input-bordered h-10'}
                           name={'confirmPassword'}
                           onChange={(e)=>handleChangeInputs(e.target.name , e.target.value)}
                       />
                   </div>

               {/* GENDER CHECKBOX GOES HERE  */}

                   <GenderCheckbox onChange={handleChangeInputs} />

                   <Link to={"/login"} className={"text-sm hover:underline hover:text-gray-100 mt-2 inline-block"}>
                       Already have an account?
                   </Link>

                   <button disabled={isLoading} type={"submit"} className={"btn btn-block btn-sm mt-2 border border-slate-700"}>
                       {!isLoading ? "Sign Up" : <span className={"loading loading-spinner"}></span>}
                   </button>
               </form>
           </div>
        </div>
    )
};

export default SignUp;
