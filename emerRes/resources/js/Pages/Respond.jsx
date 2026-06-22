import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddReportAccident from "../Components/AddReportAccident";

function Respond(){
    const [showReportAccident, setShowReportAccident] = useState(false);

    const showForm = () => {
        setShowReportAccident(true);
    }
    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <TopPanel/>
                <div className="flex flex-col flex-1 min-h-0">
                    <div className="flex justify-end">
                        <select name="sort" id="" className="m-3 w-24 dropdown">
                            <option value="active">Active</option>
                            <option value="rescued">Rescued</option>
                        </select>
                        <button className="m-3 text-xs border border-solid border-primary p-2 rounded-full" onClick={showForm}>Report Accident</button>
                    </div>
                    {showReportAccident ? 
                        <div className="absolute mt-2 h-[83vh] w-screen">
                            <AddReportAccident setShowReportAccident={setShowReportAccident}/>
                        </div> : ""
                    }   
                    <div>
                        <div className="cardInfo h-44 border-primary ">
                            <div className="">
                                <p className="text-2xl font-bold">Severity Level:</p>
                                <p className="text-sm mb-2">location</p>
                                <p>Reported by:</p>
                                <p>Contact No.:</p>
                                <p>Relationship:</p>
                                <p>Status(no one res)</p>
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="text-sm mb-2 text-gray-500">date and time</p>
                                <p className="text-sm mb-2 text-gray-500">Click to Respond</p>
                            </div>
                        </div>
                    </div>
                </div>
            <NavigationBtn/>
        </div>
    )   
}

export default Respond;