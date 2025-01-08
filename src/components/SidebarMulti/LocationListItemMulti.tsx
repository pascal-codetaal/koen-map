import React from 'react';
import { CircleDot, Landmark } from 'lucide-react';
import { Location } from '../../types/Location';

interface LocationListItemProps {
  name: string; 
  location1: Location; 
  location2: Location; 
  isSelected: boolean;
  onClick: () => void;
}

export const LocationListItemMulti: React.FC<LocationListItemProps> = ({
  name,
  location2,
  location1,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-colors flex items-start gap-3 hover:bg-indigo-50 ${isSelected ? 'bg-indigo-100' : 'bg-slate-50'
        }`}
    >
      <CircleDot
        size={20}
        className={`mt-1 ${isSelected ? 'text-indigo-600' : 'text-gray-400'}`}
      />

      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        {/* <p className="text-sm text-gray-500 line-clamp-2">{location.description}</p> */}
      </div>
    </button>
  );
}