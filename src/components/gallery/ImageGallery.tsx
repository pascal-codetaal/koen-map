import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageNavigation } from '../../hooks/useImageNavigation';
import type React from 'react';

interface ImageGalleryProps {
  images: string[];
  locationName: string;
  onClose: () => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  locationName,
  onClose,
}) => {
  const { activeIndex, nextImage, previousImage } = useImageNavigation(images.length);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/75 hover:text-white p-2"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <button
        onClick={previousImage}
        type='button'
        className="absolute left-4 text-white/75 hover:text-white p-2"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      <div className="w-full max-w-7xl px-16">
        {images[activeIndex].startsWith('video') ? (<div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/DZr40Wq59e4"
            title="wetters weefsel video voedselbos 720px"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>) : (<img
          src={images[activeIndex]}
          alt={`${locationName} ${activeIndex + 1}`}
          className="w-full h-[85vh] object-contain"
        />)}

        <div className="text-center mt-4">
          <p className="text-white/75 text-sm">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      <button
        onClick={nextImage}
        className="absolute right-4 text-white/75 hover:text-white p-2"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
};