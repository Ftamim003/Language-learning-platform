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
    element: <LessonDetails></LessonDetails>,
    loader: async ({ params }) => {
      const response = await fetch('/languageData.json');
      const lessons = await response.json();
      const filterData = lessons.filter(
        (lesson) => lesson.lesson_no === parseInt(params.lesson_no)
      );
      return { lesson_no: params.lesson_no, words: filterData };
    }

  },

  

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>,
)
