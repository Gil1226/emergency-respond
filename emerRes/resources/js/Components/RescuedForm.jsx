import { router } from "@inertiajs/react"

function RescuedForm({setShowRescuedForm, reportClickedVal}) {

    const close = () => {
        setShowRescuedForm(false)
    }

    const rescued = () => {
        router.patch(`/respond/${reportClickedVal.id}`, {
            status: "rescued"
        })
    }
    return(
        <div>
            <div className="px-10 pb-7 bg-[#f1f1f1] h-[77vh] flex flex-col justify-around">
                <div>
                    <p className="text-2xl font-bold">Severity Level: {reportClickedVal.severity}</p>
                    <p>{reportClickedVal.location}</p>
                    <p>Estimated Time of Arrival</p>
                    <p>Status: {reportClickedVal.status}</p>
                </div>
                <div>
                    <p>Reported By: {reportClickedVal.user.name}</p>
                    <p>Contact Number: {reportClickedVal.user.contact_number}</p>
                    <div>
                        <p>Description:</p>
                        <p className="bg-white mb-2 border-2 w-full h-28 p-2 overflow-scroll">{reportClickedVal.description ? reportClickedVal.description : "no description reported"}</p>
                    </div>
                </div>
                <div>
                    <p>Report Submitted at {new Date(reportClickedVal.created_at).toLocaleDateString()} - {new Date(reportClickedVal.created_at).toLocaleTimeString()}</p>
                    <p>Respond Time at {new Date(reportClickedVal.responded_at).toLocaleDateString()} - {new Date(reportClickedVal.responded_at).toLocaleTimeString()}</p>
                    <p>Rescued at {new Date(reportClickedVal.rescued_at).toLocaleDateString()} - {new Date(reportClickedVal.rescued_at).toLocaleTimeString()}</p>
                </div>
                {reportClickedVal.status == "ongoing" &&<div className="flex justify-around">
                    <button className="button-style-2 w-[24vw] h-11" onClick={close} >Cancel</button>
                    <button className="button-style-2 w-[24vw] h-11" onClick={rescued}>Rescued</button>
                </div>}
                {reportClickedVal.status == "rescued" &&<div className="flex justify-around">
                    <button className="button-style-2 w-[24vw] h-11" onClick={close} >Close</button>
                </div>}
            </div>
        </div>
    )
}
export default RescuedForm;