import type React from 'react';
import type { Location } from '../../types/Location';
import { LocationList } from './LocationList';

interface SidebarProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  locations,
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <>
      <h3 className="text-1xl font-semibold text-gray-900 ">Onze partners</h3>
      <LocationList
        locations={locations.filter((location) => location.sidebar)}
        selectedLocation={selectedLocation}
        onLocationSelect={onLocationSelect}
      />

    </>
  );
}