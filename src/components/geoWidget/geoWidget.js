import React from "react";
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from "react-yandex-maps";
import PropTypes from 'prop-types';
import './geoWidget.scss';

const GeoWidget = (props) => {
  const { mapPoints } = props;
  const mapData = {
    center: mapPoints[0],
    zoom: 5,
  };
  const coordinates = mapPoints;
  return (
    <YMaps>
      <Map defaultState={mapData} className={'mapContainer'}   >
        <ZoomControl options={{ float: 'right' }} />
        <FullscreenControl />
        {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} />)}
      </Map>
    </YMaps>
  )
};

export default GeoWidget;

GeoWidget.propTypes = {
  mapPoints: PropTypes.array,
};
