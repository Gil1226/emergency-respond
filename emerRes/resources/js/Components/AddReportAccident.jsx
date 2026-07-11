import { useForm, usePage } from "@inertiajs/react";
import CurrentLocation from "@/Utility/CurrentLocation";
import { useEffect } from "react";

function AddReportAccident({ setShowReportAccident }){

    const{ auth } = usePage().props;

    const {data, setData, post, processing, errors} = useForm({
        location : "",
        relationship: "",
        severity : "",
        picture: null,
        description: "",
        lat: "",
        long: "",
        status: "pending"
    })

    useEffect(()=>{
        const getLocation = async () => {
            const loc = await CurrentLocation();
            setData("location", `${loc.address.neighbourhood} ${loc.address.town}, ${loc.address.state}`);
            setData('lat', loc.latitude);
            setData('long', loc.longitude);
        }
        getLocation();
    }, []);

    const close = () => {
        setShowReportAccident(false)
    }

    const addReportFunc = (e) => {
        e.preventDefault();
        post('/addReport', {
            forceFormData: true,

            onSuccess: () => {
                setShowReportAccident(false)
            },

            onError: (error) => {
                console.log(error);
            }
        });

    }

    return(
        <div>
            <form
                className="bg-gray-100 h-[77vh] overflow-y-auto scrollbar-hide p-6"
                onSubmit={(e) => addReportFunc(e)}
            >
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Report an Emergency
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Complete the information below to submit your emergency report.
                    </p>
                </div>

                {/* Reporter Information */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                    <h2 className="text-lg font-bold mb-4">
                        Reporter Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div className="relative">
                            <input
                                type="text"
                                className="inputDesign peer"
                                value={auth.user.name}
                                readOnly
                                placeholder=" "
                            />
                            <label className="labelPosition">
                                Reported By
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                className="inputDesign peer"
                                value={auth.user.contact_number}
                                readOnly
                                placeholder=" "
                            />
                            <label className="labelPosition">
                                Contact Number
                            </label>
                        </div>

                    </div>
                </div>

                {/* Incident Information */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                    <h2 className="text-lg font-bold mb-4">
                        Incident Information
                    </h2>

                    <div className="relative mb-5">
                        <input
                            type="text"
                            className="inputDesign peer"
                            value={data.location}
                            readOnly
                            placeholder=" "
                        />
                        <label className="labelPosition">
                            Incident Location
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <label className="block mb-2 font-medium">
                                Relationship
                            </label>

                            <select
                                className="w-full border rounded-lg p-3"
                                onChange={(e) =>
                                    setData("relationship", e.target.value)
                                }
                            >
                                <option value="">Select Relationship</option>
                                <option value="victim">Victim</option>
                                <option value="witness">Witness</option>
                                <option value="passerby">Passerby</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Severity Level
                            </label>

                            <select
                                className="w-full border rounded-lg p-3"
                                onChange={(e) =>
                                    setData("severity", e.target.value)
                                }
                            >
                                <option value="">Select Severity</option>
                                <option value="minor">Minor</option>
                                <option value="moderate">Moderate</option>
                                <option value="severe">Severe</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>

                    </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                    <h2 className="text-lg font-bold mb-4">
                        Incident Description
                    </h2>

                    <textarea
                        rows={5}
                        className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Describe the emergency (optional)..."
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                    />
                </div>

                {/* Upload */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-6">
                    <h2 className="text-lg font-bold mb-4">
                        Evidence
                    </h2>

                    <label className="block border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-primary transition">
                        <p className="font-medium">
                            📷 Upload Incident Photo
                        </p>

                        <p className="text-sm text-gray-500 mt-2">
                            Tap to choose or capture an image
                        </p>

                        <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            className="hidden"
                            onChange={(e) =>
                                setData("picture", e.target.files[0])
                            }
                        />
                    </label>

                    {data.picture && (
                        <p className="mt-3 text-green-600 text-sm">
                            ✓ {data.picture.name}
                        </p>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">

                    <button
                        type="button"
                        className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100"
                        onClick={close}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-8 py-3 rounded-lg bg-primary text-white hover:opacity-90 font-semibold"
                    >
                        Submit Report
                    </button>

                </div>
            </form>
        </div>
    )   
}

export default AddReportAccident;