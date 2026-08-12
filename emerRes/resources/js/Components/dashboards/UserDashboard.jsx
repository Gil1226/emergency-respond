import { usePage } from "@inertiajs/react";
import { useState } from "react";
import AddReportAccident from "@/Components/AddReportAccident";

function UserDashboard({reports, greeting}) {
    const { auth } = usePage().props;

    const [showReportAccident, setShowReportAccident] = useState(false);

    const reportFunc = () => {
        setShowReportAccident(true);
    }

    const [ind, setInd] = useState(0);
    const nextFunc = () => {
        setInd((prev) => (prev + 1) % reports.length);
    }
    const prevFunc = () => {
        setInd((prev) => (prev - 1 + reports.length) % reports.length);
    }
    console.log(reports[ind]);
    if (showReportAccident) {
        return <AddReportAccident setShowReportAccident={setShowReportAccident} />
    }


    return(
        <div className="flex-1 px-4 py-5 max-w-2xl mx-auto overflow-scroll scrollbar-hide">
            
            {/* Greeting */}
            <div className="mb-5">
                <p className="text-2xl font-bold text-gray-800">
                    {greeting} {auth.user.name} 👋
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

                <button className="w-full bg-white text-primary font-bold py-3 rounded-xl mt-5"
                        onClick={reportFunc}        
                >
                    + REPORT AN EMERGENCY
                </button>

            </div>

            {/* Active Report */}
            <div
                key={reports[ind]?.id ?? ind}
                className="
                    relative overflow-hidden
                    h-[360px]
                    rounded-3xl
                    border border-gray-100
                    bg-white
                    p-6
                    shadow-lg
                    transition-all duration-300
                "
            >
                {/* Background decoration */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5" />
                <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-primary/5" />

                {/* Header */}
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50">
                            <span className="text-lg">🚨</span>
                        </div>

                        <p className="text-lg font-bold text-gray-900">
                            My Active Report
                        </p>
                    </div>

                    {/* Status */}
                    <span
                        className={`
                            min-w-[90px]
                            text-center
                            px-3 py-1.5
                            rounded-full
                            text-xs
                            font-bold
                            uppercase
                            tracking-wide
                            text-white
                            shadow-sm
                            transition-all
                            duration-300

                            ${
                                reports[ind]?.status === "rescued"
                                    ? "bg-green-500"
                                    : reports[ind]?.status === "ongoing"
                                    ? "bg-blue-500"
                                    : reports[ind]?.status === "pending"
                                    ? "bg-yellow-500"
                                    : "bg-primary"
                            }
                        `}
                    >
                        {reports[ind]?.status}
                    </span>
                </div>

                {/* Incident */}
                <div className="relative mt-6">
                    <p className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Vehicular Accident
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                            📍
                        </span>

                        <span className="truncate font-medium">
                            {reports[ind]?.location || "Location unavailable"}
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-gray-100" />

                {/* Ambulance / ETA */}
                <div className="relative grid h-[82px] grid-cols-2 gap-4">
                    {/* Ambulance */}
                    <div className="flex h-full flex-col justify-center rounded-2xl bg-gray-50 px-4">
                        <p className="text-xs font-medium text-gray-400">
                            Ambulance
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                            <span className="text-lg">🚑</span>

                            <span className="truncate text-sm font-bold text-gray-800">
                                {reports[ind]?.respond_by
                                    ? reports[ind].respond_by
                                    : "Waiting for response"}
                            </span>
                        </div>
                    </div>

                    {/* ETA */}
                    <div className="flex h-full flex-col justify-center rounded-2xl bg-gray-50 px-4">
                        <p className="text-xs font-medium text-gray-400">
                            Estimated Arrival
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                            <span className="text-lg">⏱️</span>

                            <span className="text-sm font-bold text-gray-800">
                                {reports[ind]?.eta !== null &&
                                reports[ind]?.eta !== undefined
                                    ? `${reports[ind].eta} mins`
                                    : "Calculating..."}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom action area - FIXED HEIGHT */}
                <div className="relative mt-5 h-[54px]">
                    {reports[ind]?.status === "ongoing" ? (
                        <button
                            className="
                                group
                                h-full
                                w-full
                                rounded-2xl
                                bg-primary
                                font-bold
                                text-white
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-lg
                                active:scale-[0.98]
                            "
                        >
                            <span className="flex items-center justify-center gap-2">
                                <span>📍</span>
                                TRACK AMBULANCE
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </button>
                    ) : (
                        <div
                            className="
                                flex
                                h-full
                                items-center
                                justify-center
                                rounded-2xl
                                bg-gray-50
                                text-sm
                                font-semibold
                                text-gray-400
                            "
                        >
                            {reports[ind]?.status === "rescued"
                                ? "✓ Emergency Resolved"
                                : "Waiting for ambulance response"}
                        </div>
                    )}
                </div>
            </div>


            {/* Report Navigation */}
            <div className="mt-5 flex items-center justify-between px-1">

                {/* Previous */}
                <button
                    onClick={prevFunc}
                    disabled={reports.length <= 1}
                    className="
                        group
                        flex h-12 w-12
                        items-center justify-center
                        rounded-full
                        border border-gray-200
                        bg-white
                        text-gray-700
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-x-1
                        hover:border-primary
                        hover:text-primary
                        hover:shadow-md
                        active:scale-90
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                    aria-label="Previous report"
                >
                    <span className="text-2xl transition-transform duration-300 group-hover:-translate-x-0.5">
                        ←
                    </span>
                </button>


                {/* Indicator */}
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-semibold tracking-widest text-gray-400">
                        EMERGENCY REPORT
                    </span>

                    <div className="mt-2 flex items-center gap-1.5">
                        {reports.map((_, i) => (
                            <span
                                key={i}
                                className={`
                                    h-2
                                    rounded-full
                                    transition-all
                                    duration-300
                                    ${
                                        i === ind
                                            ? "w-6 bg-primary"
                                            : "w-2 bg-gray-200"
                                    }
                                `}
                            />
                        ))}
                    </div>

                    <span className="mt-1 text-xs font-semibold text-gray-500">
                        {ind + 1} of {reports.length}
                    </span>
                </div>


                {/* Next */}
                <button
                    onClick={nextFunc}
                    disabled={reports.length <= 1}
                    className="
                        group
                        flex h-12 w-12
                        items-center justify-center
                        rounded-full
                        bg-primary
                        text-white
                        shadow-md
                        transition-all duration-300
                        hover:translate-x-1
                        hover:shadow-lg
                        active:scale-90
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                    aria-label="Next report"
                >
                    <span className="text-2xl transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                    </span>
                </button>

            </div>


        </div>
    )
}
export default UserDashboard