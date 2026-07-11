import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddHospital from "../Components/AddHospitalForm";
import CreateHospitalAccount from "@/Components/CreateHospitalAccount";
import ViewHospital from "@/Components/ViewHospital";

function Hospital({hospitals = []}){
    const [showAddHospital, setShowAddHospital] = useState(false);
    const [showViewHospital, setShowViewHospital] = useState(false);
    const [selectedHospital, setSelectedHospital] = useState();
    

    const addHospital = () => {
        setShowAddHospital(true);   
    }

    const viewHospital = (id) => {
        hospitals.map((hospital) => {
            if (hospital.id == id) {
                setSelectedHospital(hospital);
            }
        })
        setShowViewHospital(true);
        
    }

    return(
        <div className="md:bg-slate-950">
            <div className="h-screen flex flex-col overflow-hidden m-auto md:w-[27rem] md:bg-white">
                <TopPanel/>
                <div className="flex flex-col flex-1 min-h-0 ">
                    <div className="flex justify-end border-b-2">
                        <button className="m-3 button-style-2" onClick={addHospital}>Add Hospital</button>
                    </div>
                    {showAddHospital && (
                        <div>
                            <AddHospital setShowAddHospital={setShowAddHospital}/>
                        </div>
                    )}
                    
                    {showViewHospital &&
                        <div>
                            <ViewHospital setShowViewHospital={setShowViewHospital} selectedHospital={selectedHospital}/>
                        </div>
                    }

                    <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide space-y-4 p-5">
                        {hospitals.map((hospital) => (
                            <div
                                key={hospital.id}
                                className="bg-white shadow-primary rounded-2xl shadow-xl hover:bg-gray-200 transition-all duration-200 p-5 flex justify-between"
                            >
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {hospital.hospitalName}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        📍 {hospital.hospitalAddress}
                                    </p>

                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        📞
                                        <span>{hospital.contact_number}</span>
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between items-center ml-6">
                                    <button
                                        onClick={() => viewHospital(hospital.id)}
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        View →
                                    </button>

                                    <div className="bg-green-50 rounded-xl px-6 py-4 text-center">
                                        <p className="text-4xl font-bold text-green-600">
                                            {hospital.availableAmbulance}
                                        </p>

                                        <p className="text-sm text-gray-600 font-medium">
                                            Available <br></br>Ambulances
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <NavigationBtn/>
            </div>
        </div>
        
    )   
}

export default Hospital;