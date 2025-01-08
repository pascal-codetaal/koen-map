import type React from 'react';
import type { Location } from '../../types/Location';
import { LocationListItemMulti } from './LocationListItemMulti';

interface LocationListProps {
  locationsMulti: { name: string, location1: Location, location2: Location }[];
  selectedLocation: Location[] | null;
  onLocationSelect: (location: Location[]) => void;
}

export const LocationListMulti: React.FC<LocationListProps> = ({
  locationsMulti,
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <div className="space-y-2">
      {locationsMulti.map((location) => (
        <LocationListItemMulti
          key={location.name}
          name={location.name}
          location1={location?.location1}
          location2={location?.location2}
          isSelected={Array.isArray(selectedLocation) && selectedLocation.includes(location?.location1) && selectedLocation.includes(location?.location2)}
          onClick={() => onLocationSelect([location?.location1, location?.location2])}
        />
      ))}
    </div>
  );
}