import { useState, useEffect} from 'react';
import { usePage } from '@inertiajs/react';
import DateIdentifier from "@/Utility/DateIdentifier";

function RecentResponse({ reports }) {
    const { auth } = usePage().props;
    const [filteredResponse, setFilteredResponse] = useState();
    const [seeAllCompleted, setSeeAllCompleted] = useState(false);
    const [latestCompleted, setLatestCompleted] = useState();

    useEffect(() => {
        filterResponse();
    }, [reports]);
    
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
        <>
            <div className="mb-8">

                <div className="flex justify-between items-center mb-5">

                    <p className="font-bold text-xl text-gray-800">
                        📋 Recent Response
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
        </>
        
    )
}

export default RecentResponse;