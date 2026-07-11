import CreateHospitalAccount from "./CreateHospitalAccount";
import { useState } from "react";

function ViewHospital({ setShowViewHospital, selectedHospital }) {
    const [showCreateAcc, setShowCreateAcc] = useState(false);

    const accountHospital = () => {
        setShowCreateAcc(true);
    }
    return (
        <>
            {showCreateAcc && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <CreateHospitalAccount
                        setShowCreateAcc={setShowCreateAcc}
                        selectedHospital={selectedHospital}
                    />
                </div>
            )}
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto h-[77vh] overflow-scroll scrollbar-hide">
                <div className="flex justify-between items-center border-b pb-4">
                    {showCreateAcc && (
                        <div>
                            <CreateHospitalAccount setShowCreateAcc={setShowCreateAcc} selectedHospital={selectedHospital}/>
                        </div>
                    )}
                    <button
                        onClick={() => setShowViewHospital(false)}
                        className="text-gray-600 hover:text-primary font-medium"
                    >
                        ← Back
                    </button>

                    <div className="flex gap-3">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-medium">
                            Edit
                        </button>

                        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Hospital Information */}
                <div className="py-8 border-b">
                    <h2 className="text-sm text-gray-500 uppercase tracking-wide">
                        Hospital Name
                    </h2>

                    <h1 className="text-3xl font-bold mt-2">
                        {selectedHospital.hospitalName}
                    </h1>

                    <div className="mt-6 space-y-4">
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="text-lg">
                                📍 {selectedHospital.hospitalAddress}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Contact Number</p>
                            <p className="text-lg">
                                📞 {selectedHospital.contact_number}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ambulance */}
                <div className="py-10 border-b text-center">
                    <p className="text-gray-500 uppercase tracking-wide">
                        Available Ambulances
                    </p>

                    <h1 className="text-7xl font-bold text-green-600 mt-3">
                        {selectedHospital.availableAmbulance}
                    </h1>
                </div>

                {/* Account Management */}
                <div className="pt-8">
                    <h2 className="text-xl font-semibold text-center mb-6">
                        Account Management
                    </h2>

                    <div className="flex justify-center gap-4">
                        <button className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium"
                                onClick={accountHospital}>
                            + Add Account
                        </button>

                        <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium">
                            View Account List
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ViewHospital;