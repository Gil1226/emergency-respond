import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddHospital from "../Components/AddHospitalForm";

function Hospital({hospitals = []}){
    const [showAddHospital, setShowAddHospital] = useState(false);

    const [selectedView, setSelectedView] = useState();
    const addHospital = () => {
        setShowAddHospital(true);
        
    }

    const viewFunc = (id) => {
        hospitals.map((hospital) => {
            if (hospital.id == id) {
                setSelectedView(hospital);
            }
        })
        console.log(selectedView)
    }

    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <TopPanel/>
            <div className="flex flex-col flex-1 min-h-0">
                <div className="flex justify-end">
                    <button className="m-3 button-style-2" onClick={addHospital}>Add Hospital</button>
                </div>
                {showAddHospital ? 
                    <div className="absolute mt-2 h-[83vh] w-screen">
                        <AddHospital setShowAddHospital={setShowAddHospital}/>
                    </div> : ""
                }
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
                                <button className="mb-4 ml-16 text-sm" onClick={() => viewFunc(hospital.id)}>view</button>
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