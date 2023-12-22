import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';
import Genres from './components/Genres';
import About from './components/About';
import Contact from './components/Contact';
import Manage from './components/Manage';
import AddMovie from './components/AddMovie';
import GraphQL from './components/GraphQL';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {index: true, element: <Home></Home>},
      {path: "/movies", element: <Movies></Movies>},
      {path: "/genres", element: <Genres></Genres>},
      {path: "/about", element: <About></About>},
      {path: "/contact", element: <Contact></Contact>},
      {path: "/manage", element: <Manage></Manage>},
      {path: "/add", element: <AddMovie></AddMovie>},
      {path: "/login", element: <Login></Login>},
      {path: "/graphql", element: <GraphQL></GraphQL>},
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
