import TopPanel from "../Components/TopPanel";
import NavigationBtn from "../Components/NavigationBtn";
import { useState } from "react";
import AddReportAccident from "../Components/AddReportAccident";
import RespondForm from "@/Components/RespondForm";
import RescuedForm from "@/Components/RescuedForm";
import { router } from "@inertiajs/react";

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
        console.log(reports)
        router.get('/respond', {
            status: option
        },{
            preserveState: true,
            preserveScroll: true,
        });
    }

    return(
        <div className="md:bg-slate-950">
            <div className="h-screen flex flex-col overflow-hidden m-auto md:w-[27rem] md:bg-white">
                <TopPanel/>
                    <div className="flex flex-col flex-1 min-h-0">
                        <div className="flex justify-end border-b-2">
                            <select name="sort" className="m-3 w-24 dropdown" value={sort} onChange={(e) => sortingFunc(e)}>
                                <option value="">All</option>
                                <option value="pending">Pending</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="rescued">Rescued</option>
                            </select>
                            <button className="m-3 button-style-2" onClick={showForm}>Report Accident</button>
                        </div>
                        
                        {showReportAccident ? 
                            <div>
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

                        <div className="overflow-scroll scrollbar-hide p-5">
                        {reports.map((report) => (
                            <div key={report.id}>
                                <div
                                    onClick={
                                        report.status === "rescued"
                                            ? () => rescued(report.id)
                                            : undefined
                                    }
                                    className={`bg-white rounded-2xl shadow-xl hover:bg-gray-200 transition-all duration-200
                                        p-5 mb-4 cursor-pointer

                                        ${
                                            report.status === "pending"
                                                ? "shadow-secondary"
                                                : report.status === "ongoing"
                                                ? "shadow-blue-400"
                                                : "shadow-green-600"
                                        }`}
                                >
                                    {/* Header */}
                                    <div className="flex justify-between items-start">

                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">
                                                {report.severity} Severity
                                            </h2>

                                            <p className="text-gray-500 mt-1">
                                                📍 {report.location}
                                            </p>
                                        </div>

                                        <span
                                            className={`px-4 py-1 rounded-full text-sm font-semibold

                                            ${
                                                report.status === "pending"
                                                    ? "bg-secondary text-primary"

                                                    : report.status === "ongoing"
                                                    ? "bg-blue-100 text-blue-700"

                                                    : "bg-green-100 text-green-700"
                                            }`}
                                        >
                                            {report.status.toUpperCase()}
                                        </span>

                                    </div>

                                    {/* Information */}
                                    <div className="grid grid-cols-2 gap-4 mt-6">

                                        <div className="bg-gray-50 rounded-lg p-3">
                                            <p className="text-xs uppercase text-gray-500">
                                                Reporter
                                            </p>

                                            <p className="font-semibold">
                                                {report.user.name}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-3">
                                            <p className="text-xs uppercase text-gray-500">
                                                Contact Number
                                            </p>

                                            <p className="font-semibold">
                                                {report.user.contact_number}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-3">
                                            <p className="text-xs uppercase text-gray-500">
                                                Relationship
                                            </p>

                                            <p className="font-semibold">
                                                {report.relationship}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-3">
                                            <p className="text-xs uppercase text-gray-500">
                                                Responding Unit
                                            </p>

                                            <p
                                                className={`font-semibold
                                                    ${
                                                        report.status === "pending"
                                                            ? "text-secondary"
                                                            : report.status === "ongoing"
                                                            ? "text-blue-400"
                                                            : "text-green-600"
                                                    }`}
                                            >
                                                {report.respond_by ?? "Waiting for responder"}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-between items-center mt-6 border-t pt-4">

                                        <p className="text-sm text-gray-500">
                                            🕒{" "}
                                            {new Date(report.created_at).toLocaleDateString()} •{" "}
                                            {new Date(report.created_at).toLocaleTimeString()}
                                        </p>

                                        {report.status === "pending" && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    respond(report.id);
                                                }}
                                                className="px-5 py-2 rounded-lg bg-secondary text-white hover:opacity-90 transition"
                                            >
                                                Respond
                                            </button>
                                        )}

                                        {report.status === "ongoing" && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    rescued(report.id);
                                                }}
                                                className="px-5 py-2 rounded-lg bg-blue-400 text-white hover:opacity-90 transition"
                                            >
                                                View Response
                                            </button>
                                        )}

                                        {report.status === "rescued" && (
                                            <span className="font-semibold text-green-600">
                                                ✓ Completed
                                            </span>
                                        )}

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

export default Respond;