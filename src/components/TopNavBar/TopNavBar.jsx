import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {BsFillMoonFill} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';


const TopNavBar = () => {
    return (
        <div className=" bg-orange-600 h-10 w-screen text-white flex justify-between items-center px-6">
            {/* menu */}
            <ul className=" flex justify-between items-center  ">
                <li className=" list-none">About us</li>
                <li className=" list-none ms-5">Contact us</li>
            </ul>

            {/* icons */}
            <ul className=" flex justify-between items-center w-2/12 text-sm">
                <li className=" list-none"><FaFacebookF></FaFacebookF></li>
                <li className=" list-none"><BsTwitter></BsTwitter></li>
                <li className=" list-none"><GrInstagram></GrInstagram></li>
                <li className=" list-none"><BsFillMoonFill></BsFillMoonFill></li>
                <li className=" list-none"><BsSun></BsSun></li>
                <li className=" list-none"><BiSearchAlt></BiSearchAlt></li>
            </ul>

        </div>
    );
};

export default TopNavBar;