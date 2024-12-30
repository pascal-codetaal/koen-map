import React from 'react';
import { Popup as MapPopup } from 'react-map-gl';
import { Location } from '../types/Location';
import { X } from 'lucide-react';

interface PopupProps {
  location: Location;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ location, onClose }) => {
  return (
    <MapPopup
      latitude={location.latitude}
      longitude={location.longitude}
      onClose={onClose}
      closeButton={false}
      anchor="bottom"
      offset={[0, -15]}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 w-72">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{location.name}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-gray-600 mb-3">{location.description}</p>
        <div className="grid grid-cols-2 gap-2">
          {location.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${location.name} ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </MapPopup>
  );
};