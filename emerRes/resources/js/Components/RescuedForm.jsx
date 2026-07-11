import { router } from "@inertiajs/react"

function RescuedForm({setShowRescuedForm, reportClickedVal}) {

    const close = () => {
        setShowRescuedForm(false)
    }

    const rescued = () => {
        router.patch(`/respond/${reportClickedVal.id}`, {
            status: "rescued"
        })
        setShowRescuedForm(false)
    }
    return(
        <div>
            <div className="bg-gray-100 h-[77vh] overflow-y-auto scrollbar-hide p-6">

            {/* Report Header */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                <div className="flex justify-between items-center">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Emergency Report
                        </h2>

                        <p className="text-gray-500 mt-1">
                            {reportClickedVal.location}
                        </p>
                    </div>

                    <span
                        className={`px-4 py-2 rounded-full font-semibold text-white
                        ${
                            reportClickedVal.severity === "High"
                                ? "bg-red-600"
                                : reportClickedVal.severity === "Medium"
                                ? "bg-yellow-500"
                                : "bg-green-600"
                        }`}
                    >
                        {reportClickedVal.severity}
                    </span>

                </div>
            </div>

            {/* Status Information */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                <h3 className="text-lg font-bold mb-4">
                    Response Status
                </h3>

                <div className="grid grid-cols-2 gap-5">

                    <div>
                        <p className="text-sm text-gray-500">
                            Status
                        </p>

                        <p className="font-semibold capitalize">
                            {reportClickedVal.status}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Estimated Rescue Time
                        </p>

                        <p className="font-semibold">
                            {reportClickedVal.eta * 2} minutes
                        </p>
                    </div>

                </div>
            </div>

            {/* Reporter */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                <h3 className="text-lg font-bold mb-4">
                    Reporter Information
                </h3>

                <div className="grid grid-cols-2 gap-5">

                    <div>
                        <p className="text-sm text-gray-500">
                            Name
                        </p>

                        <p className="font-medium">
                            {reportClickedVal.user.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Contact Number
                        </p>

                        <p className="font-medium">
                            {reportClickedVal.user.contact_number}
                        </p>
                    </div>

                </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                <h3 className="text-lg font-bold mb-3">
                    Description
                </h3>

                <div className="bg-gray-50 border rounded-lg p-4 h-32 overflow-y-auto">
                    {reportClickedVal.description || "No description reported."}
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-md p-5 mb-6">
                <h3 className="text-lg font-bold mb-4">
                    Timeline
                </h3>

                <div className="space-y-3">

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Report Submitted</span>

                        <span className="font-medium">
                            {new Date(reportClickedVal.created_at).toLocaleDateString()} •{" "}
                            {new Date(reportClickedVal.created_at).toLocaleTimeString()}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Responded</span>

                        <span className="font-medium">
                            {new Date(reportClickedVal.responded_at).toLocaleDateString()} •{" "}
                            {new Date(reportClickedVal.responded_at).toLocaleTimeString()}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Rescued</span>

                        <span className="font-medium">
                            {reportClickedVal.status === "rescued"
                                ? `${new Date(reportClickedVal.rescued_at).toLocaleDateString()} • ${new Date(reportClickedVal.rescued_at).toLocaleTimeString()}`
                                : "Pending"}
                        </span>
                    </div>

                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">

                <button
                    className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 font-medium"
                    onClick={close}
                >
                    {reportClickedVal.status === "rescued" ? "Close" : "Cancel"}
                </button>

                {reportClickedVal.status === "ongoing" && (
                    <button
                        className="px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
                        onClick={rescued}
                    >
                        Mark as Rescued
                    </button>
                )}

            </div>

        </div>
        </div>
    )
}
export default RescuedForm;