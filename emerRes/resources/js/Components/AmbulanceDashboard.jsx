import { usePage, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

function AmbulanceDashboard({reports, greeting}) {
    const { auth } = usePage().props;
    const [reportResponding, setReportResponding] = useState(null);
    const [completedCount, setCompletedCount] = useState([]);
    const [avgResponse, setAvgResponse] = useState(0)

    useEffect(() => {
        findingActive();
        countingCompleted();
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
            console.log(minutes)
        })
        setAvgResponse((averageMins / completedCount.length).toFixed(1))
        
    }

    const viewRoute = () => {
        if (!reportResponding) {
            return;
        }

        router.get(`/map/${reportResponding.id}`);
    }

    return(
        <div className="flex-1 px-4 py-8 max-w-3xl mx-auto overflow-scroll scrollbar-hide">

            {/* Greeting */}
            <div className="mb-8">
                <p className="text-gray-500 text-base">
                    Ambulance Personnel
                </p>

                <p className="text-3xl font-bold text-gray-800">
                    {greeting} {auth.user.name} 👋
                </p>
            </div>


            {/* Active Assignment */}
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


            {/* Statistics */}
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


            {/* Live Map */}
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


            {/* Emergency Requests */}
            <div className="mb-8">

                <div className="flex justify-between items-center mb-5">

                    <p className="font-bold text-xl text-gray-800">
                        🚨 Emergency Requests
                    </p>

                    <button className="text-primary text-base font-semibold">
                        See All
                    </button>

                </div>


                {/* Request Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="font-bold text-lg text-gray-800">
                                Medical Emergency
                            </p>

                            <p className="text-base text-gray-600 mt-2">
                                📍 Tarlac City
                            </p>

                            <p className="text-sm text-red-500 mt-2">
                                🔴 High Severity
                            </p>

                        </div>


                        <button className="bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold">
                            Accept
                        </button>

                    </div>

                </div>

            </div>


            {/* Recent Responses */}
            <div className="mb-8">

                <div className="flex justify-between items-center mb-5">

                    <p className="font-bold text-xl text-gray-800">
                        📋 Recent Responses
                    </p>

                    <button className="text-primary text-base font-semibold">
                        See All
                    </button>

                </div>


                {/* Response Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="font-bold text-lg text-gray-800">
                                #00122
                            </p>

                            <p className="text-base text-gray-600 mt-2">
                                Medical Emergency
                            </p>

                            <p className="text-sm text-green-600 mt-2">
                                🟢 Completed
                            </p>

                        </div>


                        <p className="text-sm text-gray-400">
                            Today
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AmbulanceDashboard;
