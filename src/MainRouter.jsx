import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Hello from './pages/Hello';

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
        // element: <About />,
        element: <div>About</div>,
      },
      {
        path: 'projects',
        // element: <Projects />,
        element: <div>Projects</div>,
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
