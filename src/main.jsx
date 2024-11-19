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
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/learning',
        element:<Learning></Learning>,
        loader:()=>fetch("/category.json"),
        children:[
          {
            path:'/learning/:id',
            element:<LessonDetails></LessonDetails>,
            loader: ({ params }) =>
              fetch(
                `/learning/${params.id}`
              ),
          }
        ] 
      },
      {
        path:'/tutorials',
        element:<Tutorials></Tutorials>,
      },
      {
        path:'/about',
        element:<AboutUs></AboutUs>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
