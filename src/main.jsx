import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import MainLayout from './Components/MainLayout/Mainlayout';
import Tutorials from './Components/Tutorials/Tutorials';
import Learning from './Components/Learning/Learning';
import AboutUs from './Components/AboutUs/AboutUs';
import LessonDetails from './Components/lessonDetails/LessonDetails';
import AuthProvider from './Provider/AuthProvider';
import AuthLayout from './Components/Layouts/AuthLayout/AuthLayout';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import PrivateRoute from './routes/Privateroutes/PrivateRoute';
import Profile from './Components/Profile/Profile';
import ForgetPassword from './Components/Pages/ForgetPassword';
import NotFound from './Components/NotFound/NotFound';
import UpdateProfile from './Components/Profile/UpdateProfile';






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/tutorials',
        element: <Tutorials></Tutorials>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
    ]
  },
  {
    path: '/learning',
    element: <Learning></Learning>,


  },
  {
    path: '/learning/:lesson_no',
    element: <PrivateRoute><LessonDetails></LessonDetails></PrivateRoute>,
    loader: async ({ params }) => {
      const response = await fetch('/languageData.json');
      const lessons = await response.json();
      const filterData = lessons.filter(
        (lesson) => lesson.lesson_no === parseInt(params.lesson_no)
      );
      return { lesson_no: params.lesson_no, words: filterData };
    }

  },
  {
          path:"/profile",
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
  },

  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element: <Login></Login>
      },
      {
         path:'/auth/register',
         element: <Register></Register>
      },
      {
        path:'/auth/forgetPassword',
        element: <ForgetPassword></ForgetPassword>
     },
     {
      path:'/auth/updateProfile',
      element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
   },
     
    ]
  },
  
  {
    path: "*",
    element: <NotFound></NotFound>,
  },



  


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
