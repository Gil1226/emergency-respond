import { usePage, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

function HospitalDashboard({reports, greeting}) {
    const { auth } = usePage().props;
    const [activeCases, setActiveCases] = useState(0);
    const [completedCases, setCompletedCases] = useState(0);
    const [recommendedEmergency, setRecommendedEmergency] = useState(null);
    
    useEffect(() => {
        filterActiveCases();
        filterCompletedCases();
        recommendEmergency();
    }, [reports]);
    console.log("Reports:", reports);
    const filterActiveCases = () => {
        const activeCases = reports.filter((report) => 
            report.status === "pending" || report.status === "ongoing");
        setActiveCases(activeCases.length);
    }

    const filterCompletedCases = () => {
        const completedCases = reports.filter((report) => 
            report.status === "rescued" && report.user.hospital_id === auth.user.hospital_id);
        setCompletedCases(completedCases.length);
    }

    const navigateToReports = () => {
        router.get("/respond", {
            status: "pending"
        });
    }
    
    const recommendEmergency = () => {
        const severityRank = {
            minor: 1,
            moderate: 2,
            severe: 3,
            critical: 4,
        };
        const pendingReports = reports.filter(report => report.status === "pending");

        if (pendingReports.length === 0) {
            setRecommendedEmergency(null);
            return;
        }
        
        const recommended = pendingReports.reduce((best, current) => {
            const bestSeverity = severityRank[best.severity];
            const currentSeverity = severityRank[current.severity];
            
            // Higher severity wins
            if (currentSeverity > bestSeverity) {
                return current;
            }

            // Same severity -> choose the oldest
            if (
                currentSeverity === bestSeverity &&
                new Date(current.created_at) < new Date(best.created_at)
            ) {
                return current;
            }
                    return best;
                });

                setRecommendedEmergency(recommended);
            };

    return(
        <div className="flex-1 px-4 py-5 max-w-2xl mx-auto overflow-scroll scrollbar-hide">

            <div className="mb-5">

                <p className="text-gray-500 text-sm">
                    Hospital Admin
                </p>

                <p className="text-2xl font-bold text-gray-800">
                    {greeting} {auth.user.name} 👋
                </p>

            </div>

            <div className="border rounded-2xl p-5 mb-5 shadow-md">

                <div className="flex items-center justify-between mb-4">

                    <p className="font-bold text-lg">
                        🏥 Hospital Information
                    </p>

                </div>


                <p className="text-xl font-bold capitalize">
                    {auth.user.name || "Hospital Name"}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                    📍 {auth.user.hospital?.hospitalAddress || "Hospital Address"}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                    📞 {auth.user.hospital?.contact_number || "No contact number"}
                </p>

            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">

                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">

                    <p className="text-2xl font-bold text-[#4d1414]">
                        {activeCases}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                        Active Cases
                    </p>

                </div>


                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">

                    <p className="text-2xl font-bold text-green-600">
                        {auth.user.hospital?.availableAmbulance || 0}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                        Available Ambulances
                    </p>

                </div>


                <div className="bg-white rounded-2xl p-4 text-center shadow-sm">

                    <p className="text-2xl font-bold text-blue-600">
                        {completedCases}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                        Completed
                    </p>

                </div>

            </div>

            <div className="mb-5">

                <div className="flex justify-between items-center mb-3">

                    <p className="font-bold text-gray-800">
                        🚨 Recommended Emergency
                    </p>

                    <button className="text-primary text-sm font-semibold"
                            onClick={navigateToReports}
                    >
                        See All
                    </button>

                </div>


                {/* Emergency Card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="font-bold text-gray-800">
                                {recommendedEmergency ? `#${recommendedEmergency.id}` : "No Emergency"} {recommendedEmergency ? recommendedEmergency.severity : "No Type"}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                📍 {recommendedEmergency ? recommendedEmergency.location : "No Location"} <br></br> Estimated Time to Reach: {recommendedEmergency ? recommendedEmergency.eta / 2 + " mins" : "No Time"}
                            </p>

                            <p className="text-xs text-primary mt-2">
                                Reported by {recommendedEmergency ? recommendedEmergency.user.name : "No User"}
                            </p>

                        </div>


                        <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold">
                            View
                        </button>

                    </div>

                </div>

            </div>


            {/* Ambulance Status */}
            <div className="mb-5">

                <div className="flex justify-between items-center mb-3">

                    <p className="font-bold text-gray-800">
                        🚑 Ambulance Status
                    </p>

                    <button className="text-primary text-sm font-semibold">
                        See All
                    </button>

                </div>


                <div className="bg-white rounded-2xl p-4 shadow-sm">

                    {/* Available */}
                    <div className="flex justify-between items-center py-3 border-b">

                        <div className="flex items-center gap-3">

                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                            <p className="text-sm font-medium">
                                Available
                            </p>

                        </div>

                        <p className="font-bold text-green-600">
                            3
                        </p>

                    </div>


                    {/* Responding */}
                    <div className="flex justify-between items-center py-3 border-b">

                        <div className="flex items-center gap-3">

                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>

                            <p className="text-sm font-medium">
                                Responding
                            </p>

                        </div>

                        <p className="font-bold text-yellow-600">
                            2
                        </p>

                    </div>


                    {/* Unavailable */}
                    <div className="flex justify-between items-center py-3">

                        <div className="flex items-center gap-3">

                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>

                            <p className="text-sm font-medium">
                                Unavailable
                            </p>

                        </div>

                        <p className="font-bold text-red-600">
                            1
                        </p>

                    </div>

                </div>

            </div>


            {/* Recent Emergencies */}
            <div className="mb-5">

                <div className="flex justify-between items-center mb-3">

                    <p className="font-bold text-gray-800">
                        📋 Recent Emergencies
                    </p>

                    <button className="text-primary text-sm font-semibold">
                        See All
                    </button>

                </div>


                {/* Recent Emergency */}
                <div className="bg-white rounded-2xl p-4 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="font-bold text-gray-800">
                                #00122
                            </p>

                            <p className="text-sm text-gray-600">
                                Medical Emergency
                            </p>

                            <p className="text-xs text-green-600 mt-1">
                                🟢 Completed
                            </p>

                        </div>


                        <p className="text-xs text-gray-400">
                            Today
                        </p>

                    </div>

                </div>

            </div>


            {/* Quick Actions */}
            <div className="mb-5">

                <p className="font-bold text-gray-800 mb-3">
                    ⚡ Quick Actions
                </p>


                <div className="grid grid-cols-2 gap-3">

                    <button className="bg-primary text-white rounded-2xl p-4 font-semibold">
                        🏥 Edit Hospital
                    </button>

                    <button className="bg-white border rounded-2xl p-4 font-semibold text-gray-700">
                        🚑 Manage Ambulances
                    </button>

                </div>

            </div>

        </div>
    )
}
export default HospitalDashboard;