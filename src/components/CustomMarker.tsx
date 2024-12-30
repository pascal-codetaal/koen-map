import React from 'react';
import { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import { Location } from '../types/Location';

interface CustomMarkerProps {
  location: Location;
  onClick: () => void;
}

export const CustomMarker: React.FC<CustomMarkerProps> = ({ location, onClick }) => {
  return (
    <Marker
      latitude={location.latitude}
      longitude={location.longitude}
      anchor="bottom"
    >
      <button
        type="button"
        onClick={onClick}
        className="transform transition-transform hover:scale-110 focus:outline-none"
      >
        <MapPin
          size={32}
          className="text-red-500 hover:text-red-600"
          strokeWidth={2}
        />
      </button>
    </Marker>
  );
};