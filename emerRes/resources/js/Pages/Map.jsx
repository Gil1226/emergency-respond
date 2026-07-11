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
            <div className="flex-col-between m-auto md:w-[27rem] md:bg-white">
                <TopPanel/>
                {selectedReport && (
                    <div className="left-4 right-4 z-[1000] bg-white rounded-xl shadow-xl p-4 w-[27rem]">

                        <div className="flex justify-between items-center">
                            <div className="flex justify-between w-full">
                                <h2 className="text-sm font-bold">
                                    {selectedReport.severity}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Report #{selectedReport.id}
                                </p>
                            </div>
                        </div>
                        {eta && (
                            <div className="grid grid-cols-2 gap-4 mt-2">

                                <div className="bg-blue-50 rounded-lg p-1 text-center">
                                    <p className="text-xs uppercase text-gray-500">
                                        ETA
                                    </p>

                                    <h2 className="text-md font-bold text-blue-600">
                                        {eta.eta} min
                                    </h2>
                                </div>

                                <div className="bg-green-50 rounded-lg text-center">
                                    <p className="text-xs uppercase text-gray-500">
                                        Distance
                                    </p>

                                    <h2 className="text-md font-bold text-green-600">
                                        {eta.distance} km
                                    </h2>
                                </div>

                            </div>
                        )}

                    </div>
                )}
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