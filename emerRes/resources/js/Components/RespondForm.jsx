import { router } from '@inertiajs/react';
function RespondForm({setShowRespondForm, reportClickedVal}) {

    const close = () => {
        setShowRespondForm(false)
    }

    const respond = () => {
        router.patch(`/respond/${reportClickedVal.id}`, {
            status: "ongoing"
        });
        router.get(`/map/${reportClickedVal.id}`);
        setShowRespondForm(false);
    }

    return(
        <div>
            <div className="px-10 pb-7 bg-[#f1f1f1] h-[77vh] flex flex-col justify-around">
                <div>
                    <p className="text-2xl font-bold">Severity Level: {reportClickedVal.severity}</p>
                    <p>{reportClickedVal.location}</p>
                    <p>Reported By: {reportClickedVal.user.name}</p>
                    <p>Contact Number: {reportClickedVal.user.contact_number}</p>
                </div>
                <div>
                    <div>
                        <p>Description: </p> 
                        <p className="bg-white mb-2 border-2 w-full h-28 p-2 overflow-scroll">{reportClickedVal.description ? reportClickedVal.description : "no description reported"}</p>
                    </div>
                    
                    <div className="h-[30vh] overflow-scroll">
                        <img src={`/storage/${reportClickedVal.picture}`} alt="no picture provided" className=" "/>
                    </div>
                </div>
                <div className="flex justify-around">
                    <button className="button-style-2 w-[24vw] h-11" onClick={close}>Cancel</button>
                    <button className="button-style-2 w-[24vw] h-11" onClick={respond}>Respond</button>
                </div>
            </div>
        </div>
    )
}

export default RespondForm;