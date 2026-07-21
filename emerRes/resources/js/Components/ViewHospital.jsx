import CreateHospitalAccount from "./CreateHospitalAccount";
import ViewHospitalAcc from "./ViewHospitalAcc";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

function ViewHospital({ setShowViewHospital, selectedHospital, setSelectedHospital}) {
    const [showCreateAcc, setShowCreateAcc] = useState(false);
    const [showViewAcc, setShowViewAcc] = useState(false)
    const [isEdit, setIsEdit] = useState(false);
    const [hospitalEditInfo, setHospitalEditInfo] = useState({
        hospitalName: selectedHospital.hospitalName,
        hospitalAddress: selectedHospital.hospitalAddress,
        contact_number: selectedHospital.contact_number,
        availableAmbulance: parseInt(selectedHospital.availableAmbulance, 10)
    });

    const accountHospital = () => {
        setShowCreateAcc(true);
    }

    const editFunc = () => {
        setIsEdit(true);
    } 

    const close = () => {
        setIsEdit(false);
    }
    const confirmEditFunc = () => {
        router.put(`/hospital/${selectedHospital.id}`, hospitalEditInfo, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: 'Edited Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                setSelectedHospital(prev => ({
                    ...prev, ...hospitalEditInfo
                }))
                setIsEdit(false);
            },
            onError: (errors) => {
                console.log("Error", errors);
                Swal.fire({
                    title: 'error',
                    text: Object.values(errors)[0] || error,
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        });
    }

    const deleteFunc = async() => {
        const result = await Swal.fire({
            title: "Delete Hospital?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel"
        });
        if (!result.isConfirmed) return;
        router.delete(`/hospital/${selectedHospital.id}`, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: 'Deleted Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                setShowViewHospital(false)
            },
            onError: () => {
                Swal.fire({
                    title: 'error',
                    text: 'Delete Failed',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }
        })
    }
    const viewAccListFunc = () => {
        setShowViewAcc(true);
    }
    return (
        <>
            {showViewAcc &&
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <ViewHospitalAcc setShowViewAcc={setShowViewAcc} selectedHospitalId={selectedHospital.id}/>
                </div>
            }
            
            {showCreateAcc && (
                <div className="fixed inset-0  flex items-center justify-center z-50">
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
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-medium"
                                onClick={editFunc}>
                            Edit
                        </button>

                        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium"
                                onClick={deleteFunc}>
                            Delete
                        </button>
                    </div>
                </div>

                {/* Hospital Information */}
                <div className="py-8 border-b">
                    <h2 className="text-sm text-gray-500 uppercase tracking-wide">
                        Hospital Name
                    </h2>
                    {isEdit ? 
                        <input type="text" 
                               value={hospitalEditInfo.hospitalName}
                               onChange={(e) => 
                                setHospitalEditInfo({
                                    ...hospitalEditInfo, 
                                    hospitalName: e.target.value,
                               })}
                               className="inputDesign"
                        /> 
                        :
                        <h1 className="text-3xl font-bold mt-2">
                            {selectedHospital.hospitalName}
                        </h1>
                    }
                    <div className="mt-6 space-y-4">
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            {isEdit ? 
                                <input type="text" 
                                    value={hospitalEditInfo.hospitalAddress}
                                    onChange={(e) => 
                                        setHospitalEditInfo({
                                            ...hospitalEditInfo, 
                                            hospitalAddress: e.target.value,
                                    })}
                                    className="inputDesign"
                                /> 
                                :
                                <p className="text-lg">
                                    📍 {selectedHospital.hospitalAddress}
                                </p>
                            }   
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Contact Number</p>
                            {isEdit ? 
                                <input type="text" 
                                    value={hospitalEditInfo.contact_number}
                                    onChange={(e) => 
                                        setHospitalEditInfo({
                                            ...hospitalEditInfo, 
                                            contact_number: e.target.value,
                                    })}
                                    className="inputDesign"
                                /> 
                                :
                                <p className="text-lg">
                                    📞 {selectedHospital.contact_number}
                                </p>
                            }
                        </div>
                    </div>
                </div>

                {/* Ambulance */}
                <div className="py-10 border-b text-center">
                    <p className="text-gray-500 uppercase tracking-wide">
                        Available Ambulances
                    </p>
                    {isEdit ? 
                        <input type="number" 
                            value={hospitalEditInfo.availableAmbulance}
                            onChange={(e) => 
                                setHospitalEditInfo({
                                    ...hospitalEditInfo, 
                                    availableAmbulance: e.target.value,
                            })}
                            className="inputDesign text-7xl text-center"
                        /> 
                        :
                        <h1 className="text-7xl font-bold text-green-600 mt-3">
                            {selectedHospital.availableAmbulance}
                        </h1>
                    }
                </div>
                {isEdit ?
                    <div className="flex justify-end gap-4 pt-8">
                        <button
                            className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 font-medium"
                            onClick={close}
                        >
                            Cancel
                        </button>

                        <button
                            className="px-8 py-3 rounded-lg bg-third text-white hover:opacity-90 font-semibold"
                            onClick={confirmEditFunc}
                        >
                            Make Changes
                        </button>
                    </div>
                    :
                    /* Account Management */
                    <div className="pt-8">
                        <h2 className="text-xl font-semibold text-center mb-6">
                            Account Management
                        </h2>

                        <div className="flex justify-center gap-4">
                            <button className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium"
                                    onClick={accountHospital}>
                                + Add Account
                            </button>

                            <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
                                    onClick={viewAccListFunc}>
                                View Account List
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default ViewHospital;