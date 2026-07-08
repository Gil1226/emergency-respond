import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddReportAccident from "../Components/AddReportAccident";
import RespondForm from "@/Components/RespondForm";
import RescuedForm from "@/Components/RescuedForm";

function Respond({reports = []}){
    const [showReportAccident, setShowReportAccident] = useState(false);
    const [showRespondForm, setShowRespondForm] = useState(false);
    const [showRescuedForm, setShowRescuedForm] = useState(false);
    const [reportClickedVal, setReportClickedVal] = useState();
    const [sort, setSort] = useState();

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

    const rescued = (id) =>{
        reports.map((report) => {
            if (report.id == id) {
                setReportClickedVal(report);
            }
        })
        setShowRescuedForm(true);
    }
    
    const sortingFunc = (e) => {
        const option = e.target.value
        setSort(option);

        route.get('/respond', {
            status: option
        },{
            preserveState: true,
            preserveScroll: true,
        });
    }

    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <TopPanel/>
                <div className="flex flex-col flex-1 min-h-0">
                    <div className="flex justify-end">
                        <select name="sort" className="m-3 w-24 dropdown" onChange={(e) => sortingFunc(e)}>
                            <option value="pending">Pending</option>
                            <option value="ongoing">Ongoing</option>
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
                    {showRescuedForm ?
                        <div>
                            <RescuedForm setShowRescuedForm={setShowRescuedForm} reportClickedVal={reportClickedVal}/>
                        </div> : ""

                    }
                    <div className="overflow-scroll">
                    {reports.map((report) => (
                        <div key={report.id}>
                            <div className={report.status == 'pending' && "border-secondary cardInfo h-44" 
                                            || report.status == 'ongoing' && "border-third cardInfo h-44" 
                                            || report.status == 'rescued' && "cardInfo h-44"}
                                 onClick={report.status == "rescued" ? () => rescued(report.id) : undefined}>
                                <div className="">
                                    <p className="text-xl font-bold">Severity Level: {report.severity}</p>
                                    <p className="text-sm mb-2">{report.location}</p>
                                    <p>Reported by: {report.user.name}</p>
                                    <p>Contact No.: {report.user.contact_number}</p>
                                    <p>Relationship: {report.relationship}</p>
                                    <p >Responding: 
                                        <span className={report.status == 'pending' && "text-secondary" 
                                                        || report.status == 'ongoing' && "text-third" 
                                                        || report.status == 'rescued' && ""
                                        }>
                                            {report.respond_by == null ? " no one" : `${report.respond_by}`}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p className="text-sm mb-2 text-gray-500">{new Date(report.created_at).toLocaleDateString()} - {new Date(report.created_at).toLocaleTimeString()}</p>
                                    {report.status == 'pending' &&
                                        <p className="text-sm mb-2 text-gray-500" onClick={() => respond(report.id)}>Click to Respond</p>
                                    }
                                    {report.status == "ongoing" &&
                                        <p className="text-sm mb-2 text-gray-500" onClick={() => rescued(report.id)}>View Respond</p>
                                    }
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