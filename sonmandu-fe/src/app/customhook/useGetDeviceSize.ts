import React, { useEffect, useState } from 'react';

function useGetDeviceSize() {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default useGetDeviceSize;
