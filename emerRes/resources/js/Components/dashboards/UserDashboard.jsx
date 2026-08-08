import { usePage } from "@inertiajs/react";

function UserDashboard() {
    const { auth } = usePage().props;
    const hour = new Date().getHours();

    const greeting = () => {
        if (hour < 12) {
            return "Good Morning,"
        }else if(hour < 18){
            return "Good Afternoon,"
        }else{
            return "Good Evening,"
        }
    }
    console.log(auth.user.role)
    return(
        <div className="flex-1 px-4 py-5 max-w-2xl mx-auto overflow-scroll scrollbar-hide">

            {/* Greeting */}
            <div className="mb-5">

                <p className="text-gray-500 text-sm">
                    Emergency Reporter
                </p>

                <p className="text-2xl font-bold text-gray-800">
                    {greeting()} {auth.user.name} 👋
                </p>

            </div>


            {/* Emergency Button */}
            <div className="bg-primary text-white rounded-2xl p-5 mb-5 shadow-md">

                <p className="font-bold text-xl">
                    🚨 Need Emergency Assistance?
                </p>

                <p className="text-sm text-gray-200 mt-2">
                    Send an emergency report and get help as quickly as possible.
                </p>

                <button className="w-full bg-white text-primary font-bold py-3 rounded-xl mt-5">
                    + REPORT AN EMERGENCY
                </button>

            </div>


            {/* Active Report */}
            <div className="border rounded-2xl p-5 mb-5 shadow-md">

                <div className="flex items-center justify-between mb-4">

                    <p className="font-bold text-lg">
                        🚨 My Active Report
                    </p>

                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        RESPONDING
                    </span>

                </div>


                <p className="text-xl font-bold">
                    Vehicular Accident
                </p>

                <p className="text-sm text-gray-500 mt-2">
                    📍 Capas, Tarlac
                </p>


                <div className="flex justify-between mt-4 text-sm">

                    <span>
                        🚑 AMB-001
                    </span>

                    <span>
                        ⏱ ETA: 8 min
                    </span>

                </div>


                <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-5">
                    TRACK AMBULANCE
                </button>

            </div>


            {/* Emergency Status */}
            <div className="mb-5">

                <p className="font-bold text-gray-800 mb-3">
                    📊 Emergency Status
                </p>


                <div className="bg-white rounded-2xl p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        {/* Reported */}
                        <div className="flex flex-col items-center">

                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                ✓
                            </div>

                            <p className="text-xs font-semibold mt-2">
                                Reported
                            </p>

                        </div>


                        <div className="flex-1 h-1 bg-green-500 mx-2"></div>


                        {/* Assigned */}
                        <div className="flex flex-col items-center">

                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                ✓
                            </div>

                            <p className="text-xs font-semibold mt-2">
                                Assigned
                            </p>

                        </div>


                        <div className="flex-1 h-1 bg-primary mx-2"></div>


                        {/* Responding */}
                        <div className="flex flex-col items-center">

                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                🚑
                            </div>

                            <p className="text-xs font-semibold mt-2">
                                Responding
                            </p>

                        </div>


                        <div className="flex-1 h-1 bg-gray-200 mx-2"></div>


                        {/* Completed */}
                        <div className="flex flex-col items-center">

                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                ✓
                            </div>

                            <p className="text-xs text-gray-400 font-semibold mt-2">
                                Completed
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* Live Map */}
            <div className="mb-5">

                <div className="flex justify-between items-center mb-3">

                    <p className="font-bold text-gray-800">
                        🗺️ Ambulance Location
                    </p>

                    <button className="text-primary text-sm font-semibold">
                        Full Map
                    </button>

                </div>


                <div className="bg-gray-300 h-52 rounded-2xl flex items-center justify-center shadow-sm">

                    <div className="text-center">

                        <p className="text-4xl">
                            🚑 ───── 📍
                        </p>

                        <p className="text-sm text-gray-600 mt-3">
                            Ambulance is on the way
                        </p>

                        <button className="bg-primary text-white px-5 py-2 rounded-xl mt-3 text-sm">
                            Open Map
                        </button>

                    </div>

                </div>

            </div>


            {/* My Reports */}
            <div className="mb-5">

                <div className="flex justify-between items-center mb-3">

                    <p className="font-bold text-gray-800">
                        📋 My Reports
                    </p>

                    <button className="text-primary text-sm font-semibold">
                        See All
                    </button>

                </div>


                {/* Report Card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="font-bold text-gray-800">
                                #00123
                            </p>

                            <p className="text-sm text-gray-600">
                                Vehicular Accident
                            </p>

                            <p className="text-xs text-primary mt-1">
                                🟡 Responding
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
                        🚨 New Report
                    </button>

                    <button className="bg-white border rounded-2xl p-4 font-semibold text-gray-700">
                        📋 Report History
                    </button>

                </div>

            </div>

        </div>
    )
}
export default UserDashboard