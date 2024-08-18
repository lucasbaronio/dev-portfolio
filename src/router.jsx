import { Routes, Route } from 'react-router-dom';

import RootLayout from './RootLayout';
import Hello from './pages/Hello';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { TABS } from './constants/tabs';

export const Router = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Hello />} />
        <Route path={TABS.HELLO} element={<Hello />} />
        <Route path={TABS.ABOUT} element={<About />} />
        <Route path={TABS.PROJECTS} element={<Projects />} />
        <Route path={TABS.CONTACT} element={<Contact />} />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
};
