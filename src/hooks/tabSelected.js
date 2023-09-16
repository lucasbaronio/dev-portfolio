import { useEffect, useState } from 'react';
import { useMatches } from 'react-router-dom';
import { TABS } from '../constants/tabs';

export const useTabSelected = () => {
  const matches = useMatches();
  const [tabSelected, setTabSelected] = useState(TABS.HELLO.name);

  useEffect(() => {
    setTabSelected(matches[1]?.handle?.name);
  }, [matches]);

  return tabSelected;
};
