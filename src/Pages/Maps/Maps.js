import React, { Fragment } from 'react'

import 'leaflet/dist/leaflet.css';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Maps() {


    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    L.Marker.prototype.options.icon = DefaultIcon;


    const position = [35.7, -0.633333]


    const coords = [
        { lat: 35.6809676, lng: -0.6553955},
        { lat: 35.655, lng: -0.6553955},
        { lat: 35.7, lng: -0.633333},
    ]  




  return (
    <Fragment>
        <div>
            <MapContainer style={{ width : "500px", height : "500px" }} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            {coords.map(({ lat, lng }, index) => (
                <Marker position={[lat, lng]} key={index}>
                    <Popup>
                        {index + 1} is for popup with lat: {lat} and lon {lng}
                    </Popup>
                </Marker>
            ))}

            </MapContainer>
        </div>
    </Fragment>
  )
}
