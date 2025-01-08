import { useState, useCallback } from 'react';
// biome-ignore lint/style/useImportType: <explanation>
import { Location } from '../types/Location';

export const useSelectedLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | Location[]| null>(null);

  const handleLocationSelect = useCallback((location: Location | Location[]) => {
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