import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Hello from './pages/Hello';
import About from './pages/About/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { TABS } from './constants/tabs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    handle: {
      name: TABS.HELLO,
    },
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to={TABS.HELLO} replace />,
        handle: {
          name: TABS.HELLO,
        },
      },
      {
        path: TABS.HELLO,
        element: <Hello />,
        handle: {
          name: TABS.HELLO,
        },
      },
      {
        path: TABS.ABOUT,
        element: <About />,
        handle: {
          name: TABS.ABOUT,
        },
      },
      {
        path: TABS.PROJECTS,
        element: <Projects />,
        handle: {
          name: TABS.PROJECTS,
        },
      },
      {
        path: TABS.CONTACT,
        element: <Contact />,
        handle: {
          name: TABS.CONTACT,
        },
      },
    ],
  },
]);

export const MainRouter = () => <RouterProvider router={router} />;
