import { useMemo, useRef, useState } from 'react';
import { Layer, Source } from 'react-map-gl';
import { ImageGallery } from './components/gallery/ImageGallery';
import { LocationMarkers } from './components/Map/LocationMarkers';
import { LocationPopup } from './components/Map/LocationPopup';
import { MapContainer } from './components/Map/MapContainer';
import { MapControls } from './components/Map/MapControls';
import { Sidebar } from './components/Sidebar/Sidebar';
import { locations, multiLocations } from './data/locations';
import { useGalleryState } from './hooks/useGalleryState';
import { useMapState } from './hooks/useMapState';
import { useSelectedLocation } from './hooks/useSelectedLocation';
import { SidebarMulti } from './components/SidebarMulti/SidebarMulti';
import type { Location } from './types/Location';

function getBounds(points:Location[]) {
  if (!points || points.length === 0) {
    throw new Error("Array of points cannot be empty.");
  }

  let minLatitude = Number.POSITIVE_INFINITY;
  let maxLatitude = Number.NEGATIVE_INFINITY;
  let minLongitude = Number.POSITIVE_INFINITY;
  let maxLongitude = Number.NEGATIVE_INFINITY;

  for(const point of points) {
    const { latitude, longitude } = point;

    if (latitude < minLatitude) minLatitude = latitude;
    if (latitude > maxLatitude) maxLatitude = latitude;

    if (longitude < minLongitude) minLongitude = longitude;
    if (longitude > maxLongitude) maxLongitude = longitude;
  };

  return [
    [minLongitude, minLatitude],
    [maxLongitude, maxLatitude]
  ];
}
export function App() {
  const { viewState, handleMove } = useMapState();
  const { selectedLocation, handleLocationSelect, handleLocationClose } = useSelectedLocation();
  const { galleryLocation, openGallery, closeGallery } = useGalleryState();
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [futurePartners, setFuturePartners] = useState(false);
  const activeLocations = useMemo(() => futurePartners ? locations : locations.filter(location => location.future === undefined), [futurePartners]);

  return (
    <>
      <div className="flex">
        <div className="w-96 h-screen bg-white shadow-lg p-6 overflow-y-auto">
        <button
            className="text-2xl font-semibold text-gray-900 mb-6"
            onClick={() => {
              const bounds = getBounds(locations);
              if (mapRef.current) {
                mapRef.current.fitBounds(bounds as mapboxgl.LngLatBoundsLike, {
                  padding: 100,
                });
              }
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                const bounds = getBounds(locations);
                if (mapRef.current) {
                  mapRef.current.fitBounds(bounds as mapboxgl.LngLatBoundsLike, {
                    padding: 100,
                  });
                }
              }
            }}
            tabIndex={0}
            role="button"
          >
            Wetters Weefsel
          </button>

          <Sidebar
            locations={activeLocations}
            selectedLocation={!Array.isArray(selectedLocation) ? selectedLocation : null}
            onLocationSelect={(location) => {
              handleLocationSelect(location)
            }}
          />
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="checkbox"
              id="future-partners"
              name="future-partners"
              checked={futurePartners}
              onChange={() => setFuturePartners(!futurePartners)}
            />
            <label htmlFor="future-partners">Mogelijke toekomstige partners</label>
          </div>
          <SidebarMulti
            locations={multiLocations}
            selectedLocation={Array.isArray(selectedLocation) ? selectedLocation : null}
            onLocationSelect={(location) => {
              handleLocationSelect(location)
              if (Array.isArray(location) && mapRef.current) {
                mapRef.current.fitBounds([[location[0].longitude, location[0].latitude], [location[1].longitude, location[1].latitude]], {
                  padding: 100,

                })
              }
            }}
          />
        </div>
        <div className="flex-1">

          <MapContainer viewState={viewState} onMove={handleMove} mapRef={mapRef}>
            {Array.isArray(selectedLocation) && selectedLocation.length === 2 && (
              <Source
                id='selected-locations'
                type="geojson"
                data={{
                  "type": "FeatureCollection",
                  "features": [
                    {
                      "type": "Feature",
                      "geometry": {
                        "type": "LineString",
                        "coordinates": [
                          [selectedLocation[0].longitude, selectedLocation[0].latitude],
                          [selectedLocation[1].longitude, selectedLocation[1].latitude]
                        ]
                      },
                      "properties": {}
                    }
                  ]
                }}
              >
                <Layer
                  type="line"
                  source="selected-locations"
                  layout={{
                    'line-join': 'round',
                    'line-cap': 'round'
                  }}
                  paint={{
                    'line-color': 'orange',
                    'line-dasharray': [2, 2],
                    'line-width': 5,
                  }}
                />
              </Source>
            )}


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
              locations={activeLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
            {
              selectedLocation && (
                <LocationPopup
                  location={Array.isArray(selectedLocation) ? selectedLocation[1] : selectedLocation}
                  onClose={handleLocationClose}
                  onViewGallery={() => openGallery(Array.isArray(selectedLocation) ? selectedLocation[1] : selectedLocation)}
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