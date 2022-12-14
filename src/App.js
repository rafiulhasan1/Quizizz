import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import Main from './layout/Main';
import React from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Main></Main>,
      children:[
        {
          path: '/',
          loader: () => fetch('content.json'),
          element: <Home></Home> ,
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/btn/:btnId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.btnId}`)
          } ,
          element: <Topic></Topic> ,
        }
      ]
    },
    {
      path:'*',
      element: <div className='text-5xl font-bold text-orange-300'>This Page Not Found 404 Error </div> ,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;