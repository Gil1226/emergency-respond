import CalculateDistance from "@/Utility/calculateDistance";
import CurrentLocation from "@/Utility/CurrentLocation";
import { usePage, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import RespondForm from "../RespondForm";
import DateIdentifier from "@/Utility/DateIdentifier";

function AmbulanceDashboard({reports, greeting}) {
    const { auth } = usePage().props;
    const [reportResponding, setReportResponding] = useState(null);
    const [completedCount, setCompletedCount] = useState([]);
    const [avgResponse, setAvgResponse] = useState(0)
    const [nearest, setNearest] = useState(null);
    const [reportClickedVal, setReportClickedVal] = useState();
    const [showRespondForm, setShowRespondForm] = useState(false);
    const [filteredResponse, setFilteredResponse] = useState();
    const [seeAllCompleted, setSeeAllCompleted] = useState(false);
    const [latestCompleted, setLatestCompleted] = useState();

    useEffect(() => {
        findingActive();
        countingCompleted();
        findNearest();
        filterResponse();
    }, [])

    useEffect(() => {
        averageTime();
    }, [completedCount])

    const findingActive = () => {
        if (reports.length === 0) {
            return
        }

        const respondingReport = reports.find(
            report =>
                report.status === "ongoing" &&
                report.respond_by === auth.user.name
        );

        setReportResponding(respondingReport ?? null);
    }

    const countingCompleted = () => {
        if (reports.length === 0) {
            return
        }
        const count = reports.filter(
            report =>
                report.status === "rescued" &&
                report.respond_by === auth.user.name
        );

        setCompletedCount(count);
    }
    
    const averageTime = () => {
        if (completedCount.length == 0) {
            return
        }

        let averageMins = 0;
        
        completedCount.forEach(report => {
            const minutes = (new Date(report.rescued_at) - new Date(report.responded_at)) / (1000 * 60)
            averageMins += minutes;
        })
        setAvgResponse((averageMins / completedCount.length).toFixed(1))
        
    }
    const findNearest = async() => {
        const loc = await CurrentLocation();
        const nearestReports = reports.reduce((nearest, report) => {
            const distance = CalculateDistance(
                loc.latitude,
                loc.longitude,
                report.lat,
                report.long
            )
            

            if (report.status === "pending" && (!nearest || distance < nearest.distance)) {
                return {
                    report,
                    distance
                };
            }
            return nearest   
        }, null)
        setNearest(nearestReports.report)
    }

    const viewRoute = () => {
        if (!reportResponding) {
            return;
        }

        router.get(`/map/${reportResponding.id}`);
    }

    const reportFunc = () => {
        setReportClickedVal(nearest)
        setShowRespondForm(true)
    }

    const filterResponse = () => {
        const filtered = reports.filter(report => 
            report.status == "rescued" && 
            report.respond_by === auth.user.name
        )

        const sortedFiltered = [...filtered].sort(
            (a,b) => new Date(b.rescued_at) - new Date(a.rescued_at)
        )
        setFilteredResponse(sortedFiltered);

        const latestCompleted = filtered.reduce((latest, completed) => {
        if (
            !latest ||
            new Date(completed.rescued_at) > new Date(latest.rescued_at)
        ) {
            return completed;
        }

        return latest;
    }, null);

    setLatestCompleted(latestCompleted);
        
    }

    const seeAllCompletedResponse = () => {
        setSeeAllCompleted(true);
    }

    return(
        <div className="flex-1 px-4 py-8 max-w-3xl mx-auto overflow-scroll scrollbar-hide">

            <div className="mb-8">
                <p className="text-gray-500 text-base">
                    Ambulance Personnel
                </p>

                <p className="text-3xl font-bold text-gray-800">
                    {greeting} {auth.user.name} 👋
                </p>
            </div> 

            {reportResponding ? (
                <div className="border rounded-3xl p-7 mb-8 shadow-md">

                    <div className="flex items-center justify-between mb-6">

                        <p className="font-bold text-xl">
                            Active Assignment
                        </p>

                        <span className="bg-blue-400 text-white text-sm font-bold px-4 py-2 rounded-full">
                            {reportResponding.status}
                        </span>

                    </div>


                    <p className="text-2xl font-bold">
                        Severity: {reportResponding.severity}
                    </p>

                    <p className="text-base text-gray-500 mt-3">
                        📍 {reportResponding.location}
                    </p>


                    <div className="flex justify-between mt-6 text-base">

                        <span>
                            🚑 {reportResponding.respond_by}
                        </span>

                        <span>
                            ⏱ ETA: {reportResponding.eta} {reportResponding.eta > 1 ? 'mins' : 'min'}
                        </span>

                    </div>


                    <button
                        className="w-full bg-blue-400 text-white font-bold py-4 rounded-2xl mt-7 text-base"
                        onClick={viewRoute}
                    >
                        VIEW ROUTE
                    </button>

                </div>

            ) : (

                <div className="border rounded-3xl p-7 mb-8 shadow-md text-center text-gray-500">

                    <p className="font-bold text-xl text-gray-800 mb-3">
                        No Active Assignment
                    </p>

                    <p className="text-base">
                        You'll see your assignment here once you accept a request.
                    </p>

                </div>

            )}

            <div className="grid grid-cols-2 gap-5 mb-8">

                <div className="bg-white border rounded-3xl p-6 text-center shadow-sm">

                    <p className="text-3xl font-bold text-green-600">
                        {completedCount.length}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Completed
                    </p>

                </div>


                <div className="bg-white border rounded-3xl p-6 text-center shadow-sm">

                    <p className="text-3xl font-bold text-blue-600">
                        {avgResponse}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Avg. Response
                    </p>

                </div>

            </div>

            <div className="mb-8">

                <div className="flex justify-between items-center mb-5">

                    <p className="font-bold text-xl text-gray-800">
                        🗺️ Navigation
                    </p>

                    <button className="text-primary text-base font-semibold">
                        Full Map
                    </button>

                </div>


                <div className="bg-gray-300 h-60 rounded-3xl flex items-center justify-center shadow-sm">

                    <div className="text-center">

                        <p className="text-5xl">
                            🚑 ───── 🚨
                        </p>

                        <p className="text-base text-gray-600 mt-4">
                            Route to emergency location
                        </p>

                        <button className="bg-primary text-white px-6 py-3 rounded-xl mt-5 text-base">
                            Open Map
                        </button>

                    </div>

                </div>

            </div>

            <div className="mb-8">

                <div className="flex justify-between items-center mb-5">

                    <p className="font-bold text-xl text-gray-800">
                        Nearest Pending Requests
                    </p>

                </div>

                {showRespondForm &&(
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

                        <div className="relative rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-6">
                                <RespondForm
                                    setShowRespondForm={setShowRespondForm}
                                    reportClickedVal={reportClickedVal}
                                    reports={reports}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {nearest ?
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            
                            <div>
                                <p className="font-bold text-lg text-gray-800">
                                    Reported Emergency
                                </p>

                                <p className="text-base text-gray-600 mt-2">
                                    📍 {nearest.location}
                                </p>

                                <p className="text-sm text-red-500 mt-2">
                                    🔴 {nearest.status}
                                </p>

                            </div>

                            <button className="bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold"
                                    onClick={reportFunc}
                            >
                                Accept
                            </button>
                        </div>
                    </div>:
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <p className="text-center">No reports</p>
                    </div>
                }

            </div>

            <div className="mb-8">

                <div className="flex justify-between items-center mb-5">

                    <p className="font-bold text-xl text-gray-800">
                        📋 Recent Responses
                    </p>

                    <button className="text-primary text-base font-semibold"
                            onClick={seeAllCompletedResponse}
                    >
                        See All
                    </button>

                </div>

                {seeAllCompleted && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="max-h-[85vh] overflow-scroll scrollbar-hide rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">

                            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Completed Responses
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {filteredResponse.length} completed reports
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSeeAllCompleted(false)}
                                    className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="max-h-[70vh] overflow-y-auto bg-gray-50 p-5">
                                <div className="space-y-4">
                                    {filteredResponse.map((filtered) => (
                                        <div
                                            key={filtered.id}
                                            className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100 transition hover:shadow-md"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                                                            Completed
                                                        </span>
                                                        <p className="text-sm font-semibold text-gray-700">
                                                            #{String(filtered.id).padStart(5, "0")}
                                                        </p>
                                                    </div>

                                                    <p className="mt-3 text-base font-medium text-gray-800">
                                                        {filtered.description || "Medical Emergency"}
                                                    </p>

                                                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                                        <span className="inline-flex items-center gap-1">
                                                            📍 {filtered.location}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1">
                                                            🚑 {filtered.respond_by || "N/A"}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="text-right text-sm text-gray-400 whitespace-nowrap">
                                                    <p>
                                                        {filtered.rescued_at
                                                            ? new Date(filtered.rescued_at).toLocaleDateString()
                                                            : "Today"}
                                                    </p>
                                                    <p className="mt-1 text-xs text-gray-400">
                                                        ETA: {filtered.eta ?? "--"} min
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {latestCompleted ? 
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-lg text-gray-800">
                                    Report: #{String(latestCompleted.id).padStart(5, "0")}
                                </p>

                                <p className="text-base text-gray-600 mt-2">
                                    📍{latestCompleted.location}
                                </p>

                                <p className="text-sm text-green-600 mt-2">
                                    🟢 Completed
                                </p>
                            </div>
                            <div>
                                <p>{DateIdentifier(latestCompleted.rescued_at)}</p>
                            </div>
                        </div>
                    </div> :
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <p className="text-center">No Response</p>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default AmbulanceDashboard;