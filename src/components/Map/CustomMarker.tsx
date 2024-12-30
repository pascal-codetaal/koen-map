import React from 'react';
import { Marker } from 'react-map-gl';
import { CircleDot } from 'lucide-react';
import { Location } from '../../types/Location';

interface CustomMarkerProps {
  location: Location;
  active?: boolean;
  onClick: (location: Location) => void;
}

export const CustomMarker: React.FC<CustomMarkerProps> = ({ location, onClick, active }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(location);
  };

  return (
    <Marker
      latitude={location.latitude}
      longitude={location.longitude}
      anchor="bottom"
    >
      <button
        type="button"
        onClick={handleClick}
        className="transform transition-transform hover:scale-110 focus:outline-none"
        aria-label={`Show details for ${location.name}`}
      >
        {active && (
          <div className="relative top-5 flex justify-center items-center">
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full animate-ping" />
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
          </div>
        )}
        <CircleDot
          size={32}
          className={`text-green-800 hover:text-orange-500 ${active ? '' : 'opacity-70'} transition-colors duration-600`}
          strokeWidth={3}
        />
      </button>
    </Marker>
  );
};