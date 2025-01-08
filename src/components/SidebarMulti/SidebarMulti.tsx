import type React from 'react';
import type { Location } from '../../types/Location';
import { LocationListMulti } from './LocationListMulti';

interface SidebarProps {
  locations: { name: string, location1: Location, location2: Location }[];
  selectedLocation: Location[] | null;
  onLocationSelect: (location: Location[]) => void;
}

export const SidebarMulti: React.FC<SidebarProps> = ({
  locations,
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <>
      <h3 className="text-1xl font-semibold text-gray-900 mt-6">Verhalen</h3>
      <LocationListMulti
        locationsMulti={locations}
        selectedLocation={selectedLocation}
        onLocationSelect={onLocationSelect}
      />
    </>
  );
}