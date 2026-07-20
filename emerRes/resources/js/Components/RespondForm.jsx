import { router } from '@inertiajs/react';
import Swal from "sweetalert2";

function RespondForm({setShowRespondForm, reportClickedVal}) {

    const close = () => {
        setShowRespondForm(false)
    }

    const respond = () => {
        router.patch(`/respond/${reportClickedVal.id}`, {
            status: "ongoing"
        },{
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                router.get(`/map/${reportClickedVal.id}`);
                setShowRespondForm(false);
            },
            onError: (errors) => {
                Swal.fire({
                    title: 'error',
                    text: errors,
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        });
        
    }

    return(
        <div className="bg-gray-100 h-[77vh] p-6 overflow-y-auto scrollbar-hide">
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

            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                <h3 className="font-bold text-lg mb-4">
                    Reporter Information
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">
                            {reportClickedVal.user.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Contact Number</p>
                        <p className="font-medium">
                            {reportClickedVal.user.contact_number}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                <h3 className="font-bold text-lg mb-3">
                    Description
                </h3>

                <div className="border rounded-lg bg-gray-50 p-4 h-32 overflow-y-auto">
                    {reportClickedVal.description || "No description reported."}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 mb-6">
                <h3 className="font-bold text-lg mb-3">
                    Uploaded Photo
                </h3>

                <div className="flex justify-center">
                    <img
                        src={`/storage/${reportClickedVal.picture}`}
                        alt="No picture provided"
                        className="max-h-72 rounded-xl border object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button
                    className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 font-medium"
                    onClick={close}
                >
                    Cancel
                </button>

                <button
                    className="px-8 py-3 rounded-lg bg-primary text-white hover:opacity-90 font-semibold"
                    onClick={respond}
                >
                    Respond
                </button>
            </div>

        </div>
    )
}

export default RespondForm;