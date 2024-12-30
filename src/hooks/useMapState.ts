import { useState } from 'react';
import { ViewState } from 'react-map-gl';
import { MAP_INITIAL_VIEW_STATE } from '../config/mapConfig';

export const useMapState = () => {
  const [viewState, setViewState] = useState<ViewState>(MAP_INITIAL_VIEW_STATE);

  const handleMove = (evt: { viewState: ViewState }) => {
    setViewState(evt.viewState);
  };

  return { viewState, handleMove };
};