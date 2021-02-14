import L from "leaflet";

import icon from "../assets/venue_location_icon.svg";
import iconRetinaUrl from "../assets/venue_location_icon.svg";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export const IconLocation = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetinaUrl,
  shadowUrl: iconShadow,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
L.Marker.prototype.options.icon = IconLocation;
