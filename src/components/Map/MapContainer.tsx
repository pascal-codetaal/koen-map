import React from 'react';
import Map from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MAP_STYLE_URL } from '../../config/mapConfig';
import type { ViewState } from 'react-map-gl';

interface MapContainerProps {
  viewState: ViewState;
  onMove: (evt: { viewState: ViewState }) => void;
  children: React.ReactNode;
  mapRef?: React.RefObject<Map>; // Optional mapRef prop
}

export const MapContainer: React.FC<MapContainerProps> = ({
  viewState,
  onMove,
  children,
  mapRef, // Accept mapRef here
}) => {
  return (
    <div className="h-screen w-full">
      <Map
        {...viewState}
        onMove={onMove}
        hash={true}
        ref={mapRef} // Pass mapRef to the Map component
        mapboxAccessToken='pk.eyJ1IjoiYmFyYmFyb3NzbyIsImEiOiJja3VsbWRiancwNXVqMzFwMTZlbXh3Y3Q1In0.4BKvUDl3t6OSJbdMmu7tkg'
        mapStyle={MAP_STYLE_URL}
      >
        {children}
      </Map>
    </div>
  );
};
