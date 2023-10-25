import { useDropzone } from 'react-dropzone';
import { Link, useNavigate } from 'react-router-dom';
import { FcStackOfPhotos } from 'react-icons/fc';
import { useState } from 'react';
import {IoArrowBackOutline} from "react-icons/io5";

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setProfileImage(file);
        },
    });


    // Declaring useNavigate hook
    const navigate = useNavigate();

    const handleRegistration = () => {
        // Add your registration logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">

                <div className=' flex items-center justify-end'>
                    <p onClick={() => navigate('/')} className=' flex justify-between items-center text-orange-600 text-sm text-end cursor-pointer w-auto'><IoArrowBackOutline className=" me-1"></IoArrowBackOutline> back to home</p>
                </div>


                <h2 className="text-2xl font-semibold mb-6">Registration</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border focus:outline-none"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border focus:outline-none"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border focus:outline-none"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-3 py-2 border focus:outline-none"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>


                {/* Upload profile image ===================================*/}
                <div className="mb-4">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="text-gray-700 text-sm font-medium mb-2">Profile Image</p>
                        {profileImage ? (
                            <div className="mb-2">
                                <img src={URL.createObjectURL(profileImage)} alt="Profile" className="w-20 h-20 object-cover rounded-full" />
                            </div>
                        ) : (
                            <button className=" bg-red-600  text-white px-4 py-3 cursor-pointer transition-all hover:bg-red-800 flex justify-between items-center">

                                <FcStackOfPhotos className=' text-2xl me-2'></FcStackOfPhotos>
                                Upload Profile Picture

                            </button>
                        )}
                    </div>
                </div>

                {/* Register button =============================================*/}
                <div className="mb-4 w-full flex justify-center items-center">
                    <button className=" py-3   bg-orange-600 hover:bg-orange-800 cursor-pointer transition-all w-full text-white" onClick={handleRegistration}>Register</button>
                </div>

                {/* Navigate to login page */}
                <p className=' text-sm'>Already have an account? Please <Link className=' text-orange-600 font-semibold' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default RegistrationPage;
