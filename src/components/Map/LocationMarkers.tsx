import type React from 'react';
import type { Location } from '../../types/Location';
import { CustomMarker } from './CustomMarker';

interface LocationMarkersProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

export const LocationMarkers: React.FC<LocationMarkersProps> = ({
  locations,
  selectedLocation,
  onLocationSelect
}) => {
  return (
    <>
      {locations.map(location => (
        <CustomMarker
          key={location.id}
          location={location}
          onClick={() => onLocationSelect(location)}
          active={selectedLocation?.groupId === location.groupId}
        />
      ))}
    </>
  );
};