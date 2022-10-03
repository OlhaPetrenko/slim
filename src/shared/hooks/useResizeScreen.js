import { useState, useEffect } from 'react';

const IS_MOBILE = () =>
  typeof window !== 'undefined' ? window.innerWidth <= 768 - 0.02 : 0;
const IS_TABLET = () =>
  typeof window !== 'undefined' ? window.innerWidth <= 1280 - 0.02 : 0;

const useResizeScreen = () => {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);

  const handleResize = () => {
    setMobile(IS_MOBILE());
    setTablet(IS_TABLET());
  };

  useEffect(() => {
    setMobile(IS_MOBILE());
    setTablet(IS_TABLET());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return { isMobile, isTablet };
};

export default useResizeScreen;
