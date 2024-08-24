import { useEffect, useState } from 'react';
import { TABS } from '../constants/tabs';
import { useLocation } from 'react-router-dom';

export const useTabSelected = () => {
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState(TABS.HELLO);

  useEffect(() => {
    const tab = location.pathname.slice(1);
    setTabSelected(tab);
  }, [location.pathname]);

  return tabSelected;
};
