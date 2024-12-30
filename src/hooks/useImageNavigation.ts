import { useState, useCallback } from 'react';

export const useImageNavigation = (totalImages: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = useCallback(() => {
    setActiveIndex((current) => 
      current === totalImages - 1 ? 0 : current + 1
    );
  }, [totalImages]);

  const previousImage = useCallback(() => {
    setActiveIndex((current) => 
      current === 0 ? totalImages - 1 : current - 1
    );
  }, [totalImages]);

  return {
    activeIndex,
    setActiveIndex,
    nextImage,
    previousImage
  };
};