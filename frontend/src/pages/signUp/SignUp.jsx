import Login from "../login/Login.jsx";
import GenderCheckbox from "./GenderCheckbox.jsx";

const SignUp = () => {
    return (
        <div className={' flex flex-col items-center justify-center min-w-96 mx-auto'}>
           <div className={"w-full p-6  rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0"}>
               <h1 className={"text-3xl text-gray-300 font-semibold text-center"}>
                   SignUp
                   <span className={"text-3xl text-blue-500 "}> Chat App</span>
               </h1>

               <form>
                   <div>
                       <label className={"label p-2"}>
                           <span className={'text-base label-text'}>
                               Full Name
                           </span>
                       </label>
                       <input type="text" placeholder={"Soufiane Rabya"}
                              className={"input input-bordered w-full h-10"}/>
                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Username</span>
                       </label>
                       <input type="text" placeholder={"Sofiane Rabya"}
                              className={'w-full input input-bordered h-10'}/>
                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Password</span>
                       </label>
                       <input type="password" placeholder={"Password"}
                              className={'w-full input input-bordered h-10'}/>
                   </div>

                   <div>
                       <label className={'label p-2'}>
                           <span className={"text-base label-text "}>Confirm Password </span>
                       </label>
                       <input type="password" placeholder={"Confirm Password"}
                              className={'w-full input input-bordered h-10'}/>
                   </div>

               {/* GENDER CHECKBOX GOES HERE  */}

                   <GenderCheckbox/>

                   <a href={"#"} className={"text-sm hover:underline hover:text-gray-100 mt-2 inline-block"}>
                       Already have an account?
                   </a>

                   <button className={"btn btn-block btn-sm mt-2 border border-slate-700"}>
                       Sign Up
                   </button>
               </form>
           </div>
        </div>
    )
};

export default SignUp;


//STARTER CODE FOR THE SIGNUP COMPONENTS
// import GenderCheckbox from "./GenderCheckbox.jsx";

// const SignUp = () => {
//     return (
//         <div className={' flex flex-col items-center justify-center min-w-96 mx-auto'}>
//             <div className={"w-full p-6  rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0"}>
//                 <h1 className={"text-3xl text-gray-300 font-semibold text-center"}>
//                     SignUp
//                     <span className={"text-3xl text-blue-500 "}> Chat App</span>
//                 </h1>
//
//                 <form>
//                     <div>
//                         <label className={"label p-2"}>
//                            <span className={'text-base label-text'}>
//                                Full Name
//                            </span>
//                         </label>
//                         <input type="text" placeholder={"Soufiane Rabya"}
//                                className={"input input-bordered w-full h-10"}/>
//                     </div>
//
//                     <div>
//                         <label className={'label p-2'}>
//                             <span className={"text-base label-text "}>Username</span>
//                         </label>
//                         <input type="text" placeholder={"Sofiane Rabya"}
//                                className={'w-full input input-bordered h-10'}/>
//                     </div>
//
//                     <div>
//                         <label className={'label p-2'}>
//                             <span className={"text-base label-text "}>Password</span>
//                         </label>
//                         <input type="password" placeholder={"Password"}
//                                className={'w-full input input-bordered h-10'}/>
//                     </div>
//
//                     <div>
//                         <label className={'label p-2'}>
//                             <span className={"text-base label-text "}>Confirm Password </span>
//                         </label>
//                         <input type="password" placeholder={"Confirm Password"}
//                                className={'w-full input input-bordered h-10'}/>
//                     </div>
//
//                     {/* GENDER CHECKBOX GOES HERE  */}
//
//                     <GenderCheckbox/>
//
//                     <a href={"#"} className={"text-sm hover:underline hover:text-gray-100 mt-2 inline-block"}>
//                         Already have an account?
//                     </a>
//
//                     <button className={"btn btn-block btn-sm mt-2 border border-slate-700"}>
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// };
//
// export default SignUp;

