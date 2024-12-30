import React, { useState } from 'react';
import { Location } from '../../../types/Location';
import { ImageControls } from './ImageControls';
import { ImageDots } from './ImageDots';
import { ImageDisplay } from './ImageDisplay';
import { useImageNavigation } from '../../../hooks/useImageNavigation';

interface PopupImagesProps {
  location: Location;
}

export const PopupImages: React.FC<PopupImagesProps> = ({ location }) => {
  const { activeIndex, nextImage, previousImage, setActiveIndex } = useImageNavigation(
    location.images.length
  );

  return (
    <div className="relative">
      <ImageDisplay
        src={location.images[activeIndex]}
        alt={`${location.name} ${activeIndex + 1}`}
      />
      <ImageDots
        total={location.images.length}
        active={activeIndex}
        onSelect={setActiveIndex}
      />
      <ImageControls
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </div>
  );
};