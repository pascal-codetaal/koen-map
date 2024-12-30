import { ImageIcon } from 'lucide-react';
import React from 'react';
import { Location } from '../../types/Location';

interface PopupContentProps {
  location: Location;
  onClose: () => void;
  onViewGallery: () => void;
}

export const PopupContent: React.FC<PopupContentProps> = ({ location, onViewGallery }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 ">
      <div className="space-y-6">
        <img
          src={`/logos/${location.logo}`}
          alt={`Logo of ${location.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {location.images && <button
          type="button"
          onClick={onViewGallery}
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <ImageIcon size={20} />
         Bekijk de foto's
        </button>}
      </div>
    </div>
  );
};