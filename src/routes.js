// import React from 'react';
// import { Navigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import Hello from './pages/Hello';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { TABS } from './constants/tabs';

export const routes = [
  {
    path: '/',
    Component: RootLayout,
    handle: {
      name: TABS.HELLO,
    },
    // errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '/',
      //   element: <Navigate to={TABS.HELLO} replace />,
      //   handle: {
      //     name: TABS.HELLO,
      //   },
      // },
      {
        path: TABS.HELLO,
        Component: Hello,
        handle: {
          name: TABS.HELLO,
        },
      },
      {
        path: TABS.ABOUT,
        Component: About,
        handle: {
          name: TABS.ABOUT,
        },
      },
      {
        path: TABS.PROJECTS,
        Component: Projects,
        handle: {
          name: TABS.PROJECTS,
        },
      },
      {
        path: TABS.CONTACT,
        Component: Contact,
        handle: {
          name: TABS.CONTACT,
        },
      },
    ],
  },
];
