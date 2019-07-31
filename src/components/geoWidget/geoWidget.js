import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const GeoWidget = (props) => {
  const {mapPoints} = props;
  console.log(props)
  const mapData = {
    center: mapPoints[0],
    zoom: 5,
  };
  const coordinates = mapPoints;
  console.log(coordinates)
  return(
    <YMaps>
      <Map defaultState={mapData}>
        {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index}/>)}
      </Map>
    </YMaps>
  )
};

export default GeoWidget;