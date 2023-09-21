import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import MainLayout from './layouts/MainLayout';
import ImagesPage from './pages/ImagesPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<HomePage/>,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/movie/:id/images",
        element: <MoviePage />,
      },
      {
        path: "/upcoming",
        element: <UpcomingMoviesPage />,
      }
    ]
  }  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
