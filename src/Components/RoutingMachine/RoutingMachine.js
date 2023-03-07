import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet';

import 'leaflet-routing-machine'
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import "leaflet-routing-machine/dist/leaflet.routing.icons.png"
import L from "leaflet";


export default function RoutingMachine({ depart ,arrive }) {


    const map = useMap();


    useEffect(() => {
        L.Routing.control({
            waypoints: [
                            L.latLng(depart.lat , depart.lng),
                            L.latLng(arrive.lat, arrive.lng),
                            ],
            lineOptions: {
                styles: [{ color: "#6FA1EC", weight: 4 }],
            },
            routeWhileDragging: false,
            draggableWaypoints: false,
            // serviceUrl : "",
        }).addTo(map);
      }, []);


  return null;
}
