import React, { useCallback } from 'react';
import { Popup } from 'react-map-gl';
import { Location } from '../../types/Location';
import { PopupContent } from './PopupContent';

interface LocationPopupProps {
  location: Location;
  onClose: () => void;
  onViewGallery: () => void;
}

export const LocationPopup: React.FC<LocationPopupProps> = ({
  location,
  onClose,
  onViewGallery,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Popup
      latitude={location.latitude}
      longitude={location.longitude}
      onClose={handleClose}
      closeButton={false}
      offset={[0, -15]}
      closeOnClick={true}
    >
      <PopupContent
        location={location}
        onClose={handleClose}
        onViewGallery={onViewGallery}
      />
    </Popup>
  );
};