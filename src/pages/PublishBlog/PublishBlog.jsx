
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import ReactQuill from 'react-quill'; // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useState } from 'react';


export default function PublishBlog() {
    const navigate = useNavigate();
    const [blogContent, setBlogContent] = useState(''); // State to store blog content
    const [file, setFile] = useState([]);
    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image', // Add the image format
        'align',
        'color',
    ];

    const handleFile = event => {
        setFile(
            URL.createObjectURL(event.target.files[0])
        );
        const formData = new FormData();
    };
    
    // console.log(file)
    
    return (
        <div className=' w-8/12 block mx-auto my-20'>
            {/* back to home link */}
            <div className=' flex items-center justify-end w-full'>
                <p onClick={() => navigate('/')} className=' flex justify-between items-center text-orange-600 text-sm text-end cursor-pointer w-auto'>
                    <IoArrowBack className=' me-1'></IoArrowBack>
                    back to home</p>
            </div>

            <form>
                <div className="space-y-12">

                    {/* Blog title */}
                    <div className=' w-full' >
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Blog Title
                        </label>
                        <div className="mt-2 w-full">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-slate-300 sm:text-sm sm:leading-6 px-3"
                                placeholder='blog title.....'
                            />
                        </div>
                    </div>

                    {/* Bloh summery */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Blog Summery
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-slate-400 sm:text-sm sm:leading-6 px-3"
                                        defaultValue={''}
                                        placeholder='write your blog summery here .....'
                                    />
                                </div>

                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white font-semibold"
                                            >
                                                <span className=' text-orange-700'>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only"  onChange={handleFile} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* Write blog using React Quill */}
                <div className="w-full h-72 mb-20">
                    <ReactQuill
                        theme="snow" // Set the Quill theme
                        value={blogContent} // Bind the editor's value to the state
                        onChange={setBlogContent} // Handle content changes
                        className=' h-full'
                        formats={formats} // Define allowed formats (including images)
                        modules={{
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                ['blockquote', 'code-block', "image"],
                              
                                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                                [{ 'direction': 'rtl' }],                         // text direction
                              
                                // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                              
                                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                                [{ 'font': [] }],
                                [{ 'align': [] }],
                              
                                ['clean']    
                            ]
                        }}
                    />
                </div>


                {/* Publish and cancel button */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 bg-red-700 text-slate-50 hover:bg-red-800 px-5 py-2">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-orange-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    )
}
