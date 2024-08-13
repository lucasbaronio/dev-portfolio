import { useEffect, useState } from 'react';
// import { useMatches } from 'react-router-dom';
import { TABS } from '../constants/tabs';

export const useTabSelected = () => {
  // const matches = useMatches();
  const [tabSelected, setTabSelected] = useState(TABS.HELLO);

  useEffect(() => {
    // if (matches) setTabSelected(matches[1]?.handle?.name);
    setTabSelected(TABS.HELLO);
  }, []);

  return tabSelected;
};
