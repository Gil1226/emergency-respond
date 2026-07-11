import { useForm } from "@inertiajs/react";

function AddHospital({setShowAddHospital}) {
    const close = () => {
        setShowAddHospital(false);
    }

    const {data, setData, post, processing, errors} = useForm({
        hospitalName: "",
        hospitalAddress: "", 
        availableAmbulance: "",
        contact_number: ""
    })

    const addHospitaFunc = (e) => {
        e.preventDefault();
        post("/addHospital")
        setShowAddHospital(false);
    }
    return(
        <div className="bg-[#f5f6fa] rounded-2xl shadow-xl h-[77vh] p-8 overflow-y-auto">
            <form
                onSubmit={addHospitaFunc}
                className="h-full flex flex-col"
            >
                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-primary">
                        Add Hospital
                    </h2>
                    <p className="text-gray-500">
                        Enter the hospital information below.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-5 text-gray-700">
                        Hospital Information
                    </h3>

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                id="hospitalName"
                                type="text"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.hospitalName}
                                onChange={(e) =>
                                    setData("hospitalName", e.target.value)
                                }
                            />
                            <label htmlFor="hospitalName" className="labelPosition">
                                Hospital Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                id="hospitalAddress"
                                type="text"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.hospitalAddress}
                                onChange={(e) =>
                                    setData("hospitalAddress", e.target.value)
                                }
                            />
                            <label htmlFor="hospitalAddress" className="labelPosition">
                                Hospital Address
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="contact"
                                type="text"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.contact_number}
                                onChange={(e) =>
                                    setData("contact_number", e.target.value)
                                }
                            />
                            <label htmlFor="contact" className="labelPosition">
                                Contact Number
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold text-lg mb-5 text-gray-700">
                        Resource
                    </h3>
                        <div className="relative">
                            <input
                                id="ambulance"
                                type="number"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.availableAmbulance}
                                onChange={(e) =>
                                    setData("availableAmbulance", e.target.value)
                                }
                            />
                            <label htmlFor="ambulance" className="labelPosition">
                                Ambulances
                            </label>
                        </div>
                </div>

                <div className="mt-auto pt-8 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={close}
                        className="px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-8 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
                    >
                        Add Hospital
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddHospital;
