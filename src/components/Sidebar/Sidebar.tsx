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
    <div className="w-96 h-screen bg-white shadow-lg p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Onze partners</h2>
      <LocationList
        locations={locations.filter((location) => location.sidebar)}
        selectedLocation={selectedLocation}
        onLocationSelect={onLocationSelect}
      />
    </div>
  );
}