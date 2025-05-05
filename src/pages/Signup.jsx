import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from '../assets/Images/Bazzaro.png' 
FaUnlock
export const Signup = () => {
   const [checkPassword, setPassword] = useState('password');

    const handlePassword = (e)=>{
        e.preventDefault();
        setPassword(checkPassword ==='password' ? 'text' : 'password');
    }
    return (
        <>
        <div className="flex items-center justify-center h-[100vh] flex-col md:flex-row">
            <div>
            <img src={image1} alt="" />
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-10 items-center shadow-md p-15 sm:px-25 lg:px-15 md:px-15  mt-5 h-fit">
                    <h3 className="font-extralight text-4xl  text-red-500 mt-2 text-center font-serif  ">Sign Up</h3>
                    <form action="" className="flex flex-col items-center justify-center border-red-800 h-full">
                        <input id='name' className="p-2 shadow-md lg:w-xs font-light text-lg" type="text" placeholder="Enter the Name" />
                        <br />
                        <input id='email' className="p-2 shadow-md lg:w-xs font-light text-lg" type="text" placeholder="Enter the Email" />
                        <br />
                        <input id='phone' className="p-2 shadow-md lg:w-xs font-light text-lg" type="text" placeholder="Enter the Phone No." />
                        <br />
                        <input id='password' className="p-2 shadow-md lg:w-xs font-light text-lg" type={checkPassword} placeholder="Enter the Password" />
                        <button className='-mt-7 sm:ml-40 lg:ml-70 md:ml-60 font-light text-red-500' onClick={handlePassword} >{checkPassword === 'password' ? <FaLock /> : <FaUnlock />}</button>
                        <br />
                        <input id='password' className="p-2 shadow-md lg:w-xs font-light text-lg" type="password" placeholder="Repeat the Password" />
                        <br />
                        <button className="border p-2 px-9 bg-red-500 text-md text-white hover:border-red-500 hover:text-red-500 hover:bg-white hover:font-bold w-full">Register</button>
                        <Link to='/Login'>
                            <p>Already have account ?</p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
};
;