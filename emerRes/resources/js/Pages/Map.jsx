import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import CurrentLocation from "@/Utility/CurrentLocation";
import RouteDirection from "@/Utility/routeDirection";
import { router } from "@inertiajs/react";

function Map({ reports = [], reportId }) {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [selectedReport, setSelectedReport] = useState();
    const [eta, setEta] = useState(null);

    useEffect(() => {
        if (reportId == '{reportId') {
            return;
        }

        setSelectedReport(
            reports.find((report) => report.id == reportId)
        );

        console.log(`eta ${eta} report ${reportId}`);

        if (eta == null) {
            return;
        }

        router.post(`/eta/${reportId}`, {
            eta: eta.eta
        });
    }, [reportId, eta]);

    useEffect(() => {
        const getLocation = async () => {
            const loc = await CurrentLocation();

            setLat(loc.latitude);
            setLong(loc.longitude);
        };

        getLocation();
    }, []);

    if (lat == null || long == null) {
        return (
            <div className="h-screen bg-slate-950 flex justify-center overflow-hidden">

                <div className="flex flex-col w-full md:w-[27rem] h-screen bg-white shadow-xl overflow-hidden">

                    <div className="shrink-0">
                        <TopPanel />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin mb-4"></div>

                        <p className="text-lg font-bold text-gray-800">
                            Getting your location
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Please allow location access
                        </p>
                    </div>

                    <div className="shrink-0">
                        <NavigationBtn />
                    </div>

                </div>

            </div>
        );
    }

    const showRoute = (report) => {
        setSelectedReport(report);
        console.log(eta);
    };

    return (
        <div className="h-screen bg-slate-950 flex justify-center overflow-hidden">

            <div className="relative w-full md:w-[27rem] h-screen bg-[#f8fafc] shadow-2xl flex flex-col overflow-hidden">

                <div className="relative z-[1100] shrink-0">
                    <TopPanel />
                </div>

                <div className="relative flex-1 min-h-0">

                    <div className="absolute top-4 left-4 right-4 z-[1000]">

                        {!selectedReport ? (

                            <div className="flex items-center justify-between">

                                {/* Active reports */}
                                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white">

                                    <div className="relative">

                                        <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                                            <span className="text-lg">
                                                🚨
                                            </span>
                                        </div>

                                        {reports.filter(
                                            report => report.status !== "rescued"
                                        ).length > 0 && (
                                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
                                        )}

                                    </div>

                                    <div>

                                        <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                            Emergency Reports
                                        </p>

                                        <p className="text-sm font-bold text-gray-900">

                                            {
                                                reports.filter(
                                                    report => report.status !== "rescued"
                                                ).length
                                            }

                                            {" "}Active

                                        </p>

                                    </div>

                                </div>


                                {/* GPS status */}
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2.5 shadow-lg border border-white">

                                    <div className="flex items-center gap-2">

                                        <span className="relative flex h-2.5 w-2.5">

                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>

                                        </span>

                                        <span className="text-[11px] font-bold text-gray-700">
                                            GPS Active
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ) : (


                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white overflow-hidden">

                                <div className="p-4 pb-3">

                                    <div className="flex items-start justify-between">

                                        <div className="flex items-center gap-3">

                                            <div className="relative">

                                                <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center">

                                                    <span className="text-xl">
                                                        🚨
                                                    </span>

                                                </div>

                                                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white"></span>

                                            </div>


                                            <div>

                                                <p className="text-[10px] uppercase tracking-[0.12em] font-bold text-gray-400">
                                                    Emergency Report
                                                </p>

                                                <p className="text-base font-extrabold text-gray-900">
                                                    Report #{selectedReport.id}
                                                </p>

                                            </div>

                                        </div>


                                        {/* Severity */}
                                        <span
                                            className={`
                                                px-3 py-1.5 rounded-full
                                                text-[10px]
                                                uppercase
                                                tracking-wide
                                                font-extrabold

                                                ${
                                                    selectedReport.severity?.toLowerCase() === "critical"
                                                        ? "bg-red-100 text-red-700 ring-1 ring-red-200"

                                                        : selectedReport.severity?.toLowerCase() === "severe"
                                                            ? "bg-orange-100 text-orange-700 ring-1 ring-orange-200"

                                                            : selectedReport.severity?.toLowerCase() === "moderate"
                                                                ? "bg-yellow-100 text-yellow-700 ring-1 ring-yellow-200"

                                                                : "bg-green-100 text-green-700 ring-1 ring-green-200"
                                                }
                                            `}
                                        >
                                            {selectedReport.severity}
                                        </span>

                                    </div>

                                </div>


                                {eta && (

                                    <div className="px-4 pb-4">

                                        <div className="grid grid-cols-2 gap-3">

                                            {/* ETA */}
                                            <div className="relative overflow-hidden rounded-2xl bg-blue-50 border border-blue-100 p-4">

                                                <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-blue-100/70"></div>

                                                <div className="relative">

                                                    <div className="flex items-center gap-2 mb-2">

                                                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                                            <span className="text-sm">
                                                                ⏱️
                                                            </span>
                                                        </div>

                                                        <span className="text-[10px] uppercase tracking-wider font-bold text-blue-500">
                                                            ETA
                                                        </span>

                                                    </div>

                                                    <div className="flex items-baseline gap-1">

                                                        <span className="text-2xl font-black text-blue-700">
                                                            {eta.eta}
                                                        </span>

                                                        <span className="text-xs font-semibold text-blue-500">
                                                            min
                                                        </span>

                                                    </div>

                                                    <p className="text-[10px] text-blue-400 mt-1">
                                                        Estimated arrival
                                                    </p>

                                                </div>

                                            </div>


                                            {/* DISTANCE */}
                                            <div className="relative overflow-hidden rounded-2xl bg-emerald-50 border border-emerald-100 p-4">

                                                <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-emerald-100/70"></div>

                                                <div className="relative">

                                                    <div className="flex items-center gap-2 mb-2">

                                                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                                            <span className="text-sm">
                                                                📍
                                                            </span>
                                                        </div>

                                                        <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-500">
                                                            Distance
                                                        </span>

                                                    </div>

                                                    <div className="flex items-baseline gap-1">

                                                        <span className="text-2xl font-black text-emerald-700">
                                                            {eta.distance}
                                                        </span>

                                                        <span className="text-xs font-semibold text-emerald-500">
                                                            km
                                                        </span>

                                                    </div>

                                                    <p className="text-[10px] text-emerald-400 mt-1">
                                                        From your location
                                                    </p>

                                                </div>

                                            </div>

                                        </div>


                                        {/* Route status */}
                                        <div className="mt-3 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100">

                                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>

                                            <p className="text-[11px] font-semibold text-gray-600">
                                                Route to reported location
                                            </p>

                                            <span className="ml-auto text-[10px] font-bold text-blue-600">
                                                ACTIVE
                                            </span>

                                        </div>


                                        {/* Back button */}
                                        <button
                                            type="button"
                                            onClick={() => setSelectedReport(null)}
                                            className="
                                                mt-3
                                                w-full
                                                py-3
                                                rounded-xl
                                                bg-gray-900
                                                text-white
                                                text-sm
                                                font-bold
                                                shadow-lg
                                                shadow-gray-900/10
                                                hover:bg-gray-800
                                                active:scale-[0.98]
                                                transition-all
                                                duration-200
                                            "
                                        >
                                            ← Back to Emergency Reports
                                        </button>

                                    </div>

                                )}

                            </div>

                        )}

                    </div>

                    <MapContainer
                        center={[lat, long]}
                        zoom={12}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    >

                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />


                        {!selectedReport &&
                            reports.map((report) => (

                                report.status !== "rescued" && (

                                    <Marker
                                        position={[
                                            report.lat,
                                            report.long
                                        ]}
                                        key={report.id}
                                        eventHandlers={{
                                            click: () => showRoute(report)
                                        }}
                                    >

                                        <Tooltip
                                            permanent
                                            direction="top"
                                        >

                                            <span className="font-bold">
                                                {report.severity}
                                            </span>

                                        </Tooltip>


                                        <Popup>

                                            <div className="min-w-[160px]">

                                                <p className="text-[10px] uppercase font-bold text-gray-400">
                                                    Emergency Report
                                                </p>

                                                <p className="font-bold text-gray-900">
                                                    #{report.id}
                                                </p>

                                                <div className="mt-2 flex items-center justify-between">

                                                    <span className="text-xs text-gray-500">
                                                        Severity
                                                    </span>

                                                    <span className="text-xs font-bold">
                                                        {report.severity}
                                                    </span>

                                                </div>

                                            </div>

                                        </Popup>

                                    </Marker>

                                )

                            ))
                        }


                        {selectedReport && (

                            <RouteDirection
                                start={[
                                    lat,
                                    long
                                ]}
                                end={[
                                    selectedReport.lat,
                                    selectedReport.long
                                ]}
                                onRouteFound={setEta}
                            />

                        )}

                    </MapContainer>


                </div>


                <div className="relative z-[1100] shrink-0 bg-white border-t border-gray-100 p-0 m-0">

                    <NavigationBtn />

                </div>

            </div>

        </div>
    );
}

export default Map;