import { useState, useCallback } from 'react';
import { Location } from '../types/Location';

export const useSelectedLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleLocationSelect = useCallback((location: Location) => {
    setSelectedLocation(location);
  }, []);

  const handleLocationClose = useCallback(() => {
    setSelectedLocation(null);
  }, []);

  return {
    selectedLocation,
    handleLocationSelect,
    handleLocationClose
  };
};