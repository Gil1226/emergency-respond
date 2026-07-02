import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import CurrentLocation from "@/Utility/CurrentLocation";
import RouteDirection from "@/Utility/routeDirection";

function Map({reports = [], reportId}){
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [selectedReport, setSelectedReport] = useState();
    

    useEffect(() => {
        setSelectedReport(reports.find((report) => report.id == reportId))
    }, [reportId])

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
    const showRoute = (report) => {
        setSelectedReport(report)
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
                {reports.map((report) => (
                    <Marker position={[report.lat, report.long]} 
                        key={report.id} 
                        eventHandlers={{click: () => showRoute(report) }}>
                        <Tooltip permanent direction="top">
                            {report.severity}
                        </Tooltip>
                    </Marker>
                ))}
                {selectedReport && (
                    <RouteDirection
                        start={[lat, long]}
                        end={[selectedReport.lat, selectedReport.long]}
                    />
                )}
                
            </MapContainer>
            <NavigationBtn/>
        </div>
    )   
}

export default Map;