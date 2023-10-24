//  This component contains logo and login,logout, addBlog button.
//  This components take place after TopNavbar component.

import { FiFilePlus } from 'react-icons/fi';
import {BiSolidLogIn} from 'react-icons/bi'
const LogoContainer = () => {
    return (
        <div className=" w-screen h-24 flex justify-between items-center px-6">
            {/* plus icon to publish a blog */}
            <FiFilePlus className=' text-3xl cursor-pointer  hover:text-orange-700 transition-all'></FiFilePlus>

            {/* Logo of this website */}
            <h1 className=" text-6xl font-bold"><span className=" text-orange-600" >T</span>rendyTech</h1>

            {/* Login button */}
            <BiSolidLogIn className=' text-3xl cursor-pointer  hover:text-orange-700 transition-all'></BiSolidLogIn>
        </div>
    );
};

export default LogoContainer;