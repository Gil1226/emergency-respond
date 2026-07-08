import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddHospital from "../Components/AddHospitalForm";
import CreateHospitalAccount from "@/Components/CreateHospitalAccount";

function Hospital({hospitals = []}){
    const [showAddHospital, setShowAddHospital] = useState(false);
    const [showCreateAcc, setShowCreateAcc] = useState(false);
    const [selectedHospital, setSelectedHospital] = useState();
    const addHospital = () => {
        setShowAddHospital(true);   
    }

    const accountHospital = (id) => {
        hospitals.map((hospital) => {
            if (hospital.id == id) {
                setSelectedHospital(hospital);
            }
        })
        setShowCreateAcc(true);
        
    }

    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <TopPanel/>
            <div className="flex flex-col flex-1 min-h-0">
                <div className="flex justify-end">
                    <button className="m-3 button-style-2" onClick={addHospital}>Add Hospital</button>
                </div>
                {showAddHospital && (
                    <div className="absolute mt-2 h-[83vh] w-screen">
                        <AddHospital setShowAddHospital={setShowAddHospital}/>
                    </div>
                )}
                {showCreateAcc && (
                    <div>
                        <CreateHospitalAccount setShowCreateAcc={setShowCreateAcc} selectedHospital={selectedHospital}/>
                    </div>
                )}
                <div className="flex-1 min-h-0 overflow-y-auto">
                    {hospitals.map((hospital) => (
                        <div key={hospital.id} className="cardInfo border-primary">
                            <div>
                                <p className="text-2xl font-bold">{hospital.hospitalName}</p>
                                <p className="text-sm mb-2">{hospital.hospitalAddress}</p>
                                <div className="ml-4">
                                    <p>Available ER bed:{hospital.availableERBed}</p>
                                    <p>Available ICU bed:{hospital.availableICUBed}</p>
                                </div>
                            </div>
                            <div className="mr-2">
                                <button className="mb-4 ml-16 text-sm" onClick={() => accountHospital(hospital.id)}>Account-&gt;</button>
                                <p className="text-center text-xl font-bold">{hospital.availableAmbulance}</p>
                                <p className="text-center text-sm">Available<br></br>Ambulance</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <NavigationBtn/>
        </div>
    )   
}

export default Hospital;