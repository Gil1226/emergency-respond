import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import CurrentLocation from "@/Utility/CurrentLocation";
import RouteDirection from "@/Utility/routeDirection";
import { router } from "@inertiajs/react";

function Map({reports = [], reportId}){
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [selectedReport, setSelectedReport] = useState();
    const [eta, setEta] = useState(null);

    useEffect(() => {
        if (reportId == '{reportId') {
            return
        }
        setSelectedReport(reports.find((report) => report.id == reportId))
        console.log(`eta ${eta} report ${reportId}`)

        if (eta == null) {
            return
        }
        
        router.post(`/eta/${reportId}`, {
                eta: eta.eta
            })
    }, [reportId, eta])

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
            <div className="md:bg-slate-950">
                <div className="flex-col-between m-auto md:w-1/4 md:bg-white">
                    <TopPanel/>
                    <div className="text-3xl font-bold ml-auto mr-auto">
                        Loading....
                    </div>
                    <NavigationBtn/>
                </div> 
            </div>
            
        )
    }
    const showRoute = (report) => {
        setSelectedReport(report)
        console.log(eta)
    }
    return(
        <div className="md:bg-slate-950">
            <div className="flex-col-between m-auto md:w-1/4 md:bg-white">
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
                        report.status !== "rescued" &&
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
                            onRouteFound={setEta}
                        />
                    )}
                    
                </MapContainer>
                <NavigationBtn/>
            </div>
        </div>
        
    )   
}

export default Map;