import React from 'react';
import { X, MapPin } from 'lucide-react';
import { Location } from '../../types/Location';

interface PopupHeaderProps {
  location: Location;
  onClose: () => void;
}

export const PopupHeader: React.FC<PopupHeaderProps> = ({ location, onClose }) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-start gap-3">
        <MapPin className="text-indigo-600 mt-1" size={20} />
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700 leading-tight">
            {location.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Close popup"
      >
        <X size={20} />
      </button>
    </div>
  );
};