import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";

import { places } from "../assets/data.json";

const MapView = () => {
  const [state, setstate] = useState({
    currentLocation: { lat: "52.52437", lng: "13.41053" },
    zoom: 13,
  });
  return (
    <>
      <MapContainer center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        console.log(places)
        <Markers places={places} />
      </MapContainer>
    </>
  );
};

export default MapView;
