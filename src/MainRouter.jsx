import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Hello from './pages/Hello';
import About from './pages/About';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    handle: {
      name: 'Inicio',
    },
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Hello />,
      },
      {
        path: 'hello',
        element: <Hello />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        // element: <Projects />,
        element: <div>Contact me</div>,
      },
    ],
  },
]);

export const MainRouter = () => <RouterProvider router={router} />;
