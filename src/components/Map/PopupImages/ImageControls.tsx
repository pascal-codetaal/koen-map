import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const ImageControls: React.FC<ImageControlsProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
};