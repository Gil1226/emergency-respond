import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddReportAccident from "../Components/AddReportAccident";
import RespondForm from "@/Components/RespondForm";

function Respond({reports = []}){
    const [showReportAccident, setShowReportAccident] = useState(false);
    const [showRespondForm, setShowRespondForm] = useState(false);
    const [reportClickedVal, setReportClickedVal] = useState();

    const showForm = () => {
        setShowReportAccident(true);
    }

    const respond = (id) =>{
        reports.map((report) => {
            if (report.id == id) {
                setReportClickedVal(report);
            }
        })
        setShowRespondForm(true);
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
                        <button className="m-3 button-style-2" onClick={showForm}>Report Accident</button>
                    </div>
                    {showReportAccident ? 
                        <div className="absolute mt-2 h-[83vh] w-screen">
                            <AddReportAccident setShowReportAccident={setShowReportAccident}/>
                        </div> : ""
                    }
                    {showRespondForm ?
                        <div>
                            <RespondForm setShowRespondForm={setShowRespondForm} reportClickedVal={reportClickedVal}/>
                        </div> : ""

                    }
                    <div className="overflow-scroll">
                    {reports.map((report) => (
                        <div key={report.id} className={report.status == null ? "border-secondary": "border-third"} >
                            <div className={report.status == null ? "border-secondary cardInfo h-44": "border-third cardInfo h-44"} >
                                <div className="">
                                    <p className="text-xl font-bold">Severity Level: {report.severity}</p>
                                    <p className="text-sm mb-2">{report.location}</p>
                                    <p>Reported by: {report.user.name}</p>
                                    <p>Contact No.: {report.user.contact_number}</p>
                                    <p>Relationship: {report.relationship}</p>
                                    <p >Status: 
                                        <span className={report.status == null ? "text-secondary": "text-third"}>
                                            {report.status == null ? " no one responding" : ` ${report.status} is responding`}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p className="text-sm mb-2 text-gray-500">{new Date(report.created_at).toLocaleDateString()} - {new Date(report.created_at).toLocaleTimeString()}</p>
                                    <p className="text-sm mb-2 text-gray-500" onClick={() => respond(report.id)}>Click to Respond</p>
                                </div>
                            </div>
                        </div>
                    ))}   
                    </div>
                </div>
            <NavigationBtn/>
        </div>
    )   
}

export default Respond;