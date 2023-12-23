//  This component contains logo and login,logout, addBlog button.
//  This components take place after TopNavbar component.

import { FiFilePlus } from 'react-icons/fi';
import {BiSolidLogIn} from 'react-icons/bi'
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogoContainer = () => {
    
    // Recieving state and function from AuthProvider component
    const {theme} = useContext(authContext);

    // declaing useNavigate hook
    const navigate = useNavigate();

    // Function to login
    const login = () =>{
        navigate('/login');
    }
    return (
        <div className=" w-screen h-20 flex justify-between items-center px-6 mb-4">
            {/* plus icon to publish a blog */}
            <FiFilePlus onClick={()=>navigate('/publish')} className= {theme?' text-3xl cursor-pointer  hover:text-orange-700 transition-all': ' text-3xl text-white cursor-pointer  hover:text-orange-700 transition-all'}></FiFilePlus>

            {/* Logo of this website */}
            <h1 className=" text-6xl font-bold"><span className=" text-orange-600" >T</span><span className={theme?' text-black':" text-white"}>rendyTech</span> </h1>

            {/* Login button */}
            <BiSolidLogIn onClick={login} className={ theme?' text-3xl cursor-pointer  hover:text-orange-700 transition-all':' text-3xl cursor-pointer  hover:text-orange-700 transition-all text-white'}  ></BiSolidLogIn>
        </div>
    );
};

export default LogoContainer;