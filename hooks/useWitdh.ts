import { useEffect, useState } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(process.browser ? window.innerWidth : 0);
  const [mediaQuery, setMediaQuery] = useState<'P' | 'T' | 'M'>('P');

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    setMediaQuery(1024 < width ? 'P' : 480 < width ? 'T' : 380 < width ? 'M' : 'M');
  }, [width]);
  return {
    mediaQuery,
  };
};

export default useWidth;
