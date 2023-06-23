import { useEffect, useState } from 'react';

export default function useScreenWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, [width]);

  function handleWidth() {
    setWidth(window.innerWidth);
  }

  return width;
}
