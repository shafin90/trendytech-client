import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5'

const LoginPage = () => {
    // Declaring the useNavigation hook
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded shadow-md w-96">

                {/* back to home link */}
                <div className=' flex items-center justify-end'>
                    <p onClick={() => navigate('/')} className=' flex justify-between items-center text-orange-600 text-sm text-end cursor-pointer w-auto'>
                    <IoArrowBack className=' me-1'></IoArrowBack>
                        back to home</p>
                </div>

                {/* login form start here */}
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border focus:outline-none"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border focus:outline-none"
                        placeholder="Enter your password"
                    />
                </div>
                <button className=" py-3   bg-orange-600 hover:bg-orange-800 cursor-pointer transition-all w-full text-white">Login</button>
                <p className=" text-center my-4">Or</p>
                <div className="flex justify-center items-center">
                    <button className=' border p-4 rounded-full hover:bg-slate-300 transition-all cursor-pointer'><FcGoogle className=' text-5xl'></FcGoogle></button>
                </div>

                <p className=' mt-4 text-sm'>Dont have an account? Please <Link to="/registration" className=' text-orange-600 font-semibold'>Registration</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
