import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
      name: TABS.HELLO.name,
    },
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Hello />,
        handle: {
          name: TABS.HELLO.name,
        },
      },
      {
        path: TABS.HELLO.name,
        element: <Hello />,
        handle: {
          name: TABS.HELLO.name,
        },
      },
      {
        path: TABS.ABOUT.name,
        element: <About />,
        handle: {
          name: TABS.ABOUT.name,
        },
      },
      {
        path: TABS.PROJECTS.name,
        element: <Projects />,
        handle: {
          name: TABS.PROJECTS.name,
        },
      },
      {
        path: TABS.CONTACT.name,
        element: <Contact />,
        handle: {
          name: TABS.CONTACT.name,
        },
      },
    ],
  },
]);

export const MainRouter = () => <RouterProvider router={router} />;
