import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

function RouteDirection({start, end, onRouteFound}){
    const map = useMap();

    useEffect(() => {
        if (!start || !end) return;

        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(start[0], start[1]),
                L.latLng(end[0], end[1]),
            ],
            show: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
        }).addTo(map);

        routingControl.on("routesfound", (e) => {
            const route = e.routes[0];
            
            onRouteFound({
                eta: Math.round(route.summary.totalTime / 60),
                distance: (route.summary.totalDistance / 1000).toFixed(2),
            });
        })

        return () => {
            map.removeControl(routingControl);
        };
    },  [map, start?.[0], start?.[1], end?.[0], end?.[1]]);

    return null;
}

export default RouteDirection;