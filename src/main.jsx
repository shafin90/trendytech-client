import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import AuthProvider from './components/AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPge';
import PublishBlog from './pages/PublishBlog/PublishBlog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'/login',
    element:<LoginPage></LoginPage>
  },
  {
    path:'/registration',
    element:<RegistrationPage></RegistrationPage>
  },
  {
    path:'/publish',
    element:<PublishBlog></PublishBlog>
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);