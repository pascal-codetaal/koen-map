import { useRef } from 'react';
import { Layer, Source } from 'react-map-gl';
import { ImageGallery } from './components/gallery/ImageGallery';
import { LocationMarkers } from './components/Map/LocationMarkers';
import { LocationPopup } from './components/Map/LocationPopup';
import { MapContainer } from './components/Map/MapContainer';
import { MapControls } from './components/Map/MapControls';
import { Sidebar } from './components/Sidebar/Sidebar';
import { locations } from './data/locations';
import { useGalleryState } from './hooks/useGalleryState';
import { useMapState } from './hooks/useMapState';
import { useSelectedLocation } from './hooks/useSelectedLocation';

export function App() {
  const { viewState, handleMove } = useMapState();
  const { selectedLocation, handleLocationSelect, handleLocationClose } = useSelectedLocation();
  const { galleryLocation, openGallery, closeGallery } = useGalleryState();
  const mapRef = useRef(null);

  return (
    <>
      <div className="flex">
        <Sidebar
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationSelect={(location) => {
            if (mapRef.current) {
              const map = mapRef.current.getMap(); // Access the map instance
              // map.flyTo({
              //   center: [location.longitude, location.latitude], 
              // });
            }
            handleLocationSelect(location)
          }}
        />
        <div className="flex-1">
          <MapContainer viewState={viewState} onMove={handleMove} mapRef={mapRef}>
            <Source id='images' type="raster" tiles={[
              'https://a.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYm13LXByb2R1Y3Rpb24iLCJhIjoiY2xyZW5ua2hwMGRvMDJqbzlkb3oya21mdiJ9.46E5BHyLAqGhwypZRIQE2A'
            ]} tileSize={256}>
              <Layer
                id={'satellite-layer'}
                type={'raster'}
                source={'mapbox-satellite'}
                paint={{ 'raster-opacity': 0.4 }}
              />
            </Source>
            <Source id='wetteren' type="geojson" data={"/data/wetteren.geojson"}>
              <Layer type='line' paint={{ 'line-color': 'orange', 'line-width': 4 }} />
              <Layer type='fill' paint={{ 'fill-color': 'white', "fill-opacity": 0.1 }} />
            </Source>
            <MapControls />
            <LocationMarkers
              locations={locations}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
            {
              selectedLocation && (
                <LocationPopup
                  location={selectedLocation}
                  onClose={handleLocationClose}
                  onViewGallery={() => openGallery(selectedLocation)}
                />
              )
            }
          </MapContainer >
        </div>
      </div>
      {galleryLocation && (
        <ImageGallery
          images={galleryLocation.images || []}
          locationName={galleryLocation.name}
          onClose={closeGallery}
        />
      )}
    </>
  );
}

export default App;