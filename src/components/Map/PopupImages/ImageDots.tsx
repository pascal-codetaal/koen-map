import React from 'react';

interface ImageDotsProps {
  total: number;
  active: number;
  onSelect: (index: number) => void;
}

export const ImageDots: React.FC<ImageDotsProps> = ({ total, active, onSelect }) => {
  return (
    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === active 
              ? 'bg-white scale-125' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  );
};