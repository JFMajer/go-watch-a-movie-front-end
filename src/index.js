import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {index: true, element: <Home></Home>},
      {path: "/movies", element: <Movies></Movies>}
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
