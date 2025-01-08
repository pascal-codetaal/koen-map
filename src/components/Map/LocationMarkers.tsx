import type React from 'react';
import type { Location } from '../../types/Location';
import { CustomMarker } from './CustomMarker';

interface LocationMarkersProps {
  locations: Location[];
  selectedLocation: Location | Location[] | null;
  onLocationSelect: (location: Location) => void;
}

export const LocationMarkers: React.FC<LocationMarkersProps> = ({
  locations,
  selectedLocation,
  onLocationSelect
}) => {
  return (
    <>
      {locations.map(location => {
        console.log(location.name, Array.isArray(selectedLocation) ? false : selectedLocation?.groupId === location?.groupId)
        return (
          <CustomMarker
            key={location.id}
            location={location}
            onClick={() => onLocationSelect(location)}
            active={Array.isArray(selectedLocation) ? false : selectedLocation?.groupId === location?.groupId}
          />
        )
      })}
    </>
  );
};