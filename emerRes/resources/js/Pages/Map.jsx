import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import CurrentLocation from "@/Utility/CurrentLocation";

function Map(){
    const [lat, setLat] = useState();
    const [long, setLong] = useState();

    useEffect(()=>{
        const getLocation = async () => {
            const loc = await CurrentLocation();
            setLat(loc.latitude);
            setLong(loc.longitude);
        }
        getLocation();
    }, []);

    if (lat == null || long == null ) {
        return (
            <div className="flex-col-between">
                <TopPanel/>
                <div className="text-3xl font-bold ml-auto mr-auto">
                    Loading....
                </div>
                <NavigationBtn/>
            </div> 
        )
    }

    return(
        <div className="flex-col-between">
            <TopPanel/>
            <MapContainer 
                center={[lat, long]}
                zoom={12}
                style={{ height: '500px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[lat, long]}>
                    <Tooltip permanent direction="top">
                        asdasd
                    </Tooltip>
                </Marker>
            </MapContainer>
            <NavigationBtn/>
        </div>
    )   
}

export default Map;