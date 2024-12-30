import { useState, useCallback } from 'react';
import type { Location } from '../types/Location';

export const useGalleryState = () => {
  const [galleryLocation, setGalleryLocation] = useState<Location | null>(null);

  const openGallery = useCallback((location: Location) => {
    setGalleryLocation(location);
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryLocation(null);
  }, []);

  return {
    galleryLocation,
    openGallery,
    closeGallery,
  };
};