import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Location } from '../../types/Location';

interface PopupImagesProps {
  location: Location;
}

export const PopupImages: React.FC<PopupImagesProps> = ({ location }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((current) => 
      current === location.images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveIndex((current) => 
      current === 0 ? location.images.length - 1 : current - 1
    );
  };

  return (
    <div className="relative">
      <div className="aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={location.images[activeIndex]}
          alt={`${location.name} ${activeIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {location.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={previousImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};