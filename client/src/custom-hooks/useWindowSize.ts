import { useState, useEffect } from 'react';

export interface IWindowSize {
  width: number | undefined,
  height: number | undefined
}

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;