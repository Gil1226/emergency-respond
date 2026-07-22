import { router } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ViewHospitalAcc({setShowViewAcc, selectedHospitalId}){
    const[accountList, setAccountList] = useState([]);

    useEffect(() => {
        if (!selectedHospitalId) {
            return
        }
        fetchAcc();
        console.log(accountList)
    }, [])

    const fetchAcc = async() => {
        try {
            const response = await axios.get(`/hospital/${selectedHospitalId}`)
            console.log(response.data.user);
            setAccountList(response.data.user)
        } catch (error) {
            console.log(error);
        }
    } 
    
    const deleteFunc = (id) => {
        router.delete(`/hospital/${id}/Account`,{
            onSuccess: () => {
                Swal.fire({
                    title: 'Success',
                    text: 'Deleted Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                setAccountList(prev => prev.filter(account => account.id !== id));
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


    return(
        <>
            <div className="h-[27rem] rounded-2xl bg-[#f5f6fa] p-8 shadow-xl overflow-scroll scrollbar-hide">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#4d1414]">
                        Hospital Accounts
                    </h2>

                    <button
                        onClick={() => setShowViewAcc(false)}
                        className="rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-200"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">

                    {!accountList ? 
                        <div className="flex justify-center">
                            <p>loading...</p>
                        </div>
                        :
                        accountList.map((account) => (
                            <div
                                key={account.id}
                                className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm gap-5"
                            >
                                {/* Account Information */}
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {account.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {account.email}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {account.contact_number}
                                    </p>

                                    <span className="capitalize mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                                        {account.role} Account
                                    </span>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => deleteFunc(account.id)}
                                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                    ))}
                </div>

            </div>
        </>
    )
}
export default ViewHospitalAcc;