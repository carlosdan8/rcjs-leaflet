import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLocation, useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";

import { places } from "../assets/data.json";

const MapView = () => {
  const [state, setstate] = useState({
    currentLocation: { lat: "52.52437", lng: "13.41053" },
    zoom: 13,
  });

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (location.state.latitude & location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      setstate({ ...state, currentLocation });
      history.replace({ pathname: "/map", state: {} });
    }
    return () => {
      isMounted = false;
    };
  }, []);

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
