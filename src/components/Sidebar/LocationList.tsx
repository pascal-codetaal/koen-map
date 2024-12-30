import type React from 'react';
import type { Location } from '../../types/Location';
import { LocationListItem } from './LocationListItem';

interface LocationListProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export const LocationList: React.FC<LocationListProps> = ({
  locations,
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <div className="space-y-2">
      {locations.map((location) => (
        <LocationListItem
          key={location.id}
          location={location}
          isSelected={selectedLocation?.id === location.id}
          onClick={() => onLocationSelect(location)}
        />
      ))}
    </div>
  );
}