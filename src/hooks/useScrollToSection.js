import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    scrollToSection(hash.replace('#', ''));
  }, [hash]);

  const scrollToSection = (section) => {
    const element = document?.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
};
