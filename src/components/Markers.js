import React from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Markers = (props) => {
  const { places } = props;
  const markers = places.map((place, i) => (
    <Marker key={i} position={place.geometry}>
      <Popup>{place.description}</Popup>
    </Marker>
  ));
  return markers;
};

export default Markers;
