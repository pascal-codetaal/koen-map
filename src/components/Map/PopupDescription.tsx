import React from 'react';

interface PopupDescriptionProps {
  description: string;
}

export const PopupDescription: React.FC<PopupDescriptionProps> = ({ description }) => {
  return (
    <p className="text-gray-600 text-base leading-relaxed">
      {description}
    </p>
  );
};