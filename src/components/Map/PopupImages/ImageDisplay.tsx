import React from 'react';

interface ImageDisplayProps {
  src: string;
  alt: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt }) => {
  return (
    <div className="aspect-[16/9] overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};