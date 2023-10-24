//  This component is the main navbar of this website.
//  It take place after logoContainer component.

import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MainNavigation = () => {
    // Recieving state and function from AuthProvider component
    const {theme} = useContext(authContext);
    
    return (
       <div className=" mt-8 flex justify-center items-center mb-7">
        
        {/* Navigation Menu */}
        <ul className=" flex justify-between items-center w-6/12">
            <li className={theme?" font-bold list-none hover:text-orange-600 transition-all cursor-pointer":" text-white font-bold list-none hover:text-orange-600 transition-all cursor-pointer"}  >Home</li>
            <li className={theme?" font-bold list-none hover:text-orange-600 transition-all cursor-pointer":" text-white font-bold list-none hover:text-orange-600 transition-all cursor-pointer"} >Features</li>
            <li className={theme?" font-bold list-none hover:text-orange-600 transition-all cursor-pointer":" text-white font-bold list-none hover:text-orange-600 transition-all cursor-pointer"}>Mobiles</li>
            <li className={theme?" font-bold list-none hover:text-orange-600 transition-all cursor-pointer":" text-white font-bold list-none hover:text-orange-600 transition-all cursor-pointer"}>Top Apps</li>
            <li className={theme?" font-bold list-none hover:text-orange-600 transition-all cursor-pointer":" text-white font-bold list-none hover:text-orange-600 transition-all cursor-pointer"}>Hot Tech</li>
            <li className={theme?" font-bold list-none hover:text-orange-600 transition-all cursor-pointer":" text-white font-bold list-none hover:text-orange-600 transition-all cursor-pointer"}>Gadgets</li>
            
        </ul>
       </div>
    );
};

export default MainNavigation;